const mongoose = require( 'mongoose' );

const DataSchema = new mongoose.Schema({
    id: Number,
    temperature: String,
    date: Date,
    version: Number,
});

module.exports = mongoose.model ( 'Data', DataSchema );