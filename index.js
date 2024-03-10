const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) =>{
    res.send('belajar express')
});

app.post('/',(req,res) =>{
    res.send('post')
});

app.delete('/',(req,res) =>{
    res.send('menghapus data')
});

app.listen(port,() =>{
    console.log(`server berjalan dengan localhost:${port}`)
});