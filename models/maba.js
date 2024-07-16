const mongoose = require('mongoose');

const mabaSchema = new mongoose.Schema({
    nim: {
        type: String,
        required: true 
    },
    nama: {
        type: String,
        required: true 
    },
    angkatan: {
        type: Number,
        required: true 
    },
    prodi: {
        type: String,
        required: true 
    },
});

module.exports = mongoose.model('Maba', mabaSchema);
