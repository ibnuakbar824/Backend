const express = require('express');
const app = express();
const port = 5000;

app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim;

    res.send(`mahasiswa dengan nim: ${nim} ditemukan` )
})

app.get('/mahasiswa/:nim/semester', (req, res) => {
    const nim = req.params.nim;
    const semester = req.params.semester;

    res.send(`mahasiswa dengan nim: ${nim} semester :${semester} ditemukan` )
})

app.get('/get-mahasiswa-by-nim',(req, res)=>{
    const nim = req.query.nim;

    res.send(`mahaiswa dengan nim : ${nim} ditemukan`)
})

app.get('/nilai-persemester', (req, res)=>{
    const nim = req.query.nim;
    const semester = req.query.semester;

    res.send(`mahasiswa dengan nim : ${nim}  semester : ${semester} ditemukan`)
})

app.use(express.json());

app.post('/mahasiswa', (req,res) =>{
    const nim = req.body.nim;
    const nama = req.body.nama;
    const angkatan = req.body.angkatan;
    const prodi = req.body.prodi;

    const msg = { status:'sukses',
                    data:{"nim" : nim, "nama" : nama, "angkatan" : angkatan, "prodi" : prodi}};

    res.send(msg);
});
// app.get('/',(req,res) =>{
//     res.send('belajar express!')
// });

// app.post('/',(req,res) =>{
//     res.send('Post')
// });

// app.put('/',(req,res) =>{
//     res.send('Update')
// });

// app.delete('/',(req,res) =>{
//     res.send('menghapus data ')
// });


app.listen(port,()=>{
    console.log(`server berjalan dengan localhost:${port}`)
})