const express = require('express')
const app = express()
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
app.get('/hello-world', (req, res) => res.send('Hello World!'))

app.get('/mongo', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("customers", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
    res.send('about')
})


app.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3001!'))