const connection = require("../db/db");

module.exports = {
    getMk: (req, res) => {
        const qstring = "SELECT * FROM matakuliah";
        connection.query(qstring, (err,data) => {
            if (err) {
                console.log("error : ", err);
                res.status(500).send({
                    message : err.message || "terjadi kesalahan saat get data"
                });
            }
            else
                res.send(data)
        });
    },

    getMkBykdMk : (req, res) => {
        const qstring = `SELECT * FROM matakuliah WHERE kdmk = '${req.params.kdmk}'`;
        connection.query(qstring, (err,data) =>{
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data spesifik"
                });
            }
            else 
                res.send(data)
        });
    }, 

    create : (req, res) => {
        const matakuliahBaru = req.body;
    
        connection.query("INSERT INTO matakuliah SET ?", matakuliahBaru,(err) => {
            if (err) {
                console.log("error : ", err);
                res.status(500).send({
                    message : err.message || "terjadi kesalahan saat insert data"
                });
            }
            else
                res.send(matakuliahBaru)
        });
    },

    update : (req, res) => {
        const kdmk = req.params.kdmk;
        const matkul = req.body;
        const qstring = `UPDATE matakuliah
                        SET matakuliah = '${matkul.matakuliah}', sks = '${matkul.sks}', semester = '${matkul.semester}'
                        WHERE kdmk = '${kdmk}'`
        connection.query(qstring, (err, data) =>{
            if (err){
                res.status(500).send({
                    message : "error dalam UPDATE maatakuliah dengan kode " + kdmk
                });
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : `Not found matakuliah dengan kode ${kdmk}.`
                });
            }
            else {
                console.log("updated data: ", {kdmk: kdmk, ... matkul});
                res.send({kdmk : kdmk, ... matkul});
            }
        });
    },

    delete : (req, res) => {
        const kdmk = req.params.kdmk
        const qstring = `DELETE FROM matakuliah WHERE kdmk = '${kdmk}'`
        connection.query(qstring, (err,data) => {
            if (err) {
                res.status(500).send({
                    message : "Error dalam menghapus data matakuliah dengan kode " + kdmk
                });
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : `NOT found matakuliah dengan kode ${kdmk}.`
                });
            }
            else
                res.send(`Matakuliah dengan kode = ${kdmk} telah dihapus`)
        });
    },
}