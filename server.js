const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pasword: '',
    database: 'maba'
});

connection.connect(error =>{
    if (error) throw error;
    console.log("sukses masuk kedatabase!");
});

app.post('/maba', (req, res) =>{
    const kuliah = req.body
    connection.query("INSERT INTO mabastikom set ?", kuliah,(err) =>{
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "terjadi kesalahan saat insert data"
            });
        }
        else
        res. send(req.body)
    });
}),
app.get('/maba',(req, res) => {
    const qstring = "SELECT * FROM mabastikom";
    connection.query(qstring, (err, data) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message: err.message || "Terjadi kesalahan saat get"
            });
        }
        res.send(data);
    });
})

app.get('/maba/:nim',(req, res) => {
    const qstring = `SELECT * FROM mabastikom WHERE nim = '${req.params.nim}'`;
    connection.query(qstring, (err, data) => {
        if (err) {
            console.log("error: ", err);
            res.status(500).send({
                message: err.message || "Terjadi kesalahan saat get"
            });
        }
        res.send(data);
    });
})


app.put('/maba/:nim',(req, res) => {
    const nim = req.params.nim;
    const kuliah = req.body;
    const qstring = `UPDATE maba 
                    SET nama = '${kuliah.nama}', angkatan = '${kuliah.angkatan}', prodi = '${kuliah.prodi}'
                    WHERE nim = '${nim}'`
    connection.query(qstring, (err,data) => {
        if(err) {
            res.status(500).send({
                message: "ERROR updating mabastikom with NIM " + nim 
            });
        }
        else if(data.affectedRows == 0){
            res.status(404).send({
                message: `NOT found mabastikom with NIM ${nim}`
            });
        }
        else {
            console.log("update mabastikom: ", {nim: nim, ...kuliah});
            res.send({nim: nim, ...kuliah})
        }
    })
})

app.listen(port, () =>{
    console.log(`server berjalan dengan localhost:${port}`)
});