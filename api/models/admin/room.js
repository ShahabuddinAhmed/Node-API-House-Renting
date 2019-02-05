const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roomName: { type: Number, required: true }
});

module.exports = mongoose.model('Rooms', roomSchema);