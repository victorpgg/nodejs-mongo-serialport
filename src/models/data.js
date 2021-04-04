const mongoose = require( 'mongoose' );

const DataSchema = new mongoose.Schema({
    id: Number,
    temperature: String,
    date: String,
});

module.exports = mongoose.model ( 'Data', DataSchema );