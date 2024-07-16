const connection = require('../db/db');

module.exports = {
    getMba: (req, res) => {
        const qstring = "SELECT * FROM mabastikom";
        connection.query(qstring, (err, data) => {
            if (err) {
                console.error("Error fetching data:", err);
                return res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get"
                });
            }
            res.send(data);
        });
    },

    getMbaByNim: (req, res) => {
        const qstring = "SELECT * FROM mabastikom WHERE nim = ?";
        connection.query(qstring, [req.params.nim], (err, data) => {
            if (err) {
                console.error("Error fetching data by NIM:", err);
                return res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get data"
                });
            }
            res.send(data);
        });
    },

    create: (req, res) => {
        const mabaBr = req.body;
        connection.query("INSERT INTO mabastikom SET ?", mabaBr, (err) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat insert data"
                });
            }
            res.send(req.body);
        });
    },

    update: (req, res) => {
        const nim = req.params.nim;
        const mba = req.body;
        const qstring = `
            UPDATE mabastikom 
            SET nama = ?, angkatan = ?, prodi = ?
            WHERE nim = ?
        `;
        connection.query(qstring, [mba.nama, mba.angkatan, mba.prodi, nim], (err, data) => {
            if (err) {
                console.error("Error updating data:", err);
                return res.status(500).send({
                    message: "ERROR updating mabastikom with NIM " + nim 
                });
            } else if (data.affectedRows === 0) {
                return res.status(404).send({
                    message: `NOT found mabastikom with NIM ${nim}`
                });
            } else {
                console.log("Updated mabastikom:", { nim: nim, ...mba });
                res.send({ nim: nim, ...mba });
            }
        });
    },

    delete: (req, res) => {
        const nim = req.params.nim;
        const qstring = "DELETE FROM mabastikom WHERE nim = ?";
        connection.query(qstring, [nim], (err, data) => {
            if (err) {
                console.error("Error deleting data:", err);
                return res.status(500).send({
                    message: "ERROR deleting mabastikom with NIM " + nim
                });
            } else if (data.affectedRows === 0) {
                return res.status(404).send({
                    message: `NOT found mabastikom with NIM ${nim}`
                });
            } else {
                res.send(`mabastikom dengan NIM = ${nim} telah terhapus`);
            }
        });
    },
};
