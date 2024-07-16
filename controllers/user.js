const connection = require('../db/db.js');
const bcrypt = require('bcrypt');

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
    
        const qstring = 'SELECT * FROM user WHERE username = ?';
        connection.query(qstring, [username], (err, data) => {
            if (err) {
                console.log("Error querying database:", err);
                return res.status(500).send({
                    message: "Terjadi kesalahan saat mendapatkan data"
                });
            }
    
            if (data.length > 0 && bcrypt.compareSync(password, data[0].password)) {
                req.session.isAuthenticated = true;
                res.send({ login: true, message: "Login Sukses" });
            } else {
                res.status(401).send("Username atau password salah");
            }
        });
    },
    

    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                res.status(500).send("Logout gagal");
            } else {
                res.send('Logout sukses');
            }
        });
    },

    register: (req, res) => {
        const { username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const query = `INSERT INTO user (username, password) VALUES (?, ?)`;
        connection.query(query, [username, hashedPassword], (err) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Registrasi gagal"
                });
            } else {
                res.send({ username, hashedPassword });
            }
        });
    },

    ubahPassword: () => {
        // Implementasi ubah password belum ada
    },

    authenticate: (req, res, next) => {
        if (req?.session.isAuthenticated) {
            next();
        } else {
            res.status(401).send('Tidak terautentikasi');
        }
    }
};