var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://user:user123@ds159696.mlab.com:59696/shoppinglist', {
        useMongoClient: true
});

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/',(req, res)=>{
    res.send('some changes');
});

app.listen(PORT, ()=>{
    console.log('Server has been started at port: ' + PORT);
});

