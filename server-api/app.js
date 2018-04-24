const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/society";
// Add headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.post('/api/register', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("society");

        dbo.collection("customers").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("Signup Done");
            db.close();
        });
    });




})

app.post('/api/login', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("society");

        dbo.collection("customers").insertOne(req.body, function(err, res) {
            if (err) throw err;



        });
        res.end();
    });





})


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))