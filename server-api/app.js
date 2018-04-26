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
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Foo', 'bar');


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
        res.end();
    });




})

app.post('/api/login', function(req, res) {
    res.setHeader('content-type', 'application/json');
    MongoClient.connect(url, function(err, db) {

        if (err) throw err;
        var dbo = db.db("society");
        var resultArr = [];
        res.send("Connect Successfully")
        var cursor1 = dbo.collection("customers").find();
        console.log(cursor1);
        cursor1.forEach(function(doc, err) {

            resultArr.push(doc);
            console.log(doc);
        });

        var finaljson = JSON.stringify(resultArr);
        console.log(finaljson);

        res.end();


    });





})


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))