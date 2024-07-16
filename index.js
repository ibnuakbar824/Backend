const express = require('express');
const app = express();
const port = 5000;


//pertemuan 2
app.get('/', (req, res) => {
    res.send(`Hello Express!`)
});

app.get('/',(req, res)=> {
    res.send('Get-Home Page')
});

//pertemuan 3
app.get('/maba',(req, res)=>{

     res.json(maba)
});


app.get('/get-maba-by-nim', (req, res) =>{
    const nim = req.query.nim;

    res.send(`Mahasiswa dengan nim : ${nim} ditemukan`)
});

app.get('/nilai-persemester',(req, res) => {
    const nim = req.query.nim;
    const semester = req.query.semester;

    res.send(`Nilai maba nim : ${nim} semester ${semester} ditemukan`)
})

// req.params dengan 1 parameter
app.get('/maba/:nim', (req, res) => {
    const nim = req.params.nim;

    res.send(`Mahasiswa dengan nim : ${nim} ditemukan` )
});

// req.params dengan 2 parameter
app.get('/nilai/:nim/:semester',(req, res)=> {
    const nim = req.params.nim;
    const semester = req.params.semester;

    res.send(`Nilai maba nim : ${nim} semester ${semester} ditemukan`)
});

//pertemuan 2
app.post('/', (req, res) =>{
    res.send(`Post Data`)
});

app.put('/', (req, res) =>{
    res.send(`update data success`) 
});

app.delete('/', (req, res) =>{
    res.send(`Hapus Data Berhasil`)
});

app.listen(port, ()=> {
    console.log(`server berjalan dengan localhost:${port}`)
});