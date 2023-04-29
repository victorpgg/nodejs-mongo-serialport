const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM3',{
    baudRate: 9600 
    });
const parser = new Readline({ delimiter: '\r\n' });
port.pipe(parser);   

module.exports = {port, parser};