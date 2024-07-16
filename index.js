const express = require('express');
const app = express();
const port = 1000;
const routerMaba = require('./routers/maba')

app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(routerMaba)

const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
db.once("open", function () {
    console.log("Sukses Terkoneksi dengan mongodb");
});

app.listen(port, () => {
    console.log(`server berjalan dengan localhost:${port}`);
});