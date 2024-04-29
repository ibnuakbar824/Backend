const express = require('express');
const app = express();
const port = 5000;

// untuk menerima req body
app.use(express.json());
app.use(routerMba)
// app.use(routerMk)


app.listen(port, () =>{
    console.log(`server berjalan dengan localhost:${port}`)
});