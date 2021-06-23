const mongoose = require( 'mongoose' );

const DataSchema = new mongoose.Schema({
    id: Number,
    temperature: String,
    date: String,
    version: Number,
});

module.exports = mongoose.model ( 'Data', DataSchema );