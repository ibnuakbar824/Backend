const express = require('express');
const session = require('express-session');
const mysql = require("mysql2");
const app = express();
const port = 5000
const cors = require('cors')

const routerMba = require('./routes/maba')
const routerMK = require('./routes/matakuliah')
const routerNilai = require('./routes/nilai')
const routerUser = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(routerMba)
app.use(routerMK)
app.use(routerNilai)
app.use(routerUser)

app.listen(port, () => {
    console.log(`server berjalan dengan localhost:${port}`);
})


// const express = require('express');
// const routerMba = require('./routes/mahasiswa')
// const routerMk = require('./routes/matakuliah')
// const routerNilai = require('./routes/nilai')
// const app = express();
// const port = 4000;
// const cors = require('cors')

// // Untuk menerima req.body
// app.use(express.json());
// app.use(cors({
//     origin: '*'
// }))
// app.use(routerMba)
// app.use(routerMk)
// app.use(routerNilai)
// app.use(express.urlencoded({ extended: true }));


// app.listen(port, () => {
//     console.log(`Server berjalan pada localhost:${port}`);
// });