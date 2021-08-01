const mongoose = require( 'mongoose' );

const DataSchema = new mongoose.Schema({
    id: {type: String},
    temperature: String,
    date: Date,
    version: Number,
});

module.exports = mongoose.model ( 'Data', DataSchema );