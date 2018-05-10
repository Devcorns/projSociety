var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');




var app = express();
var router = express.Router();
app.all('/*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Foo', 'bar');


    res.header("Access-Control-Allow-Origin", "*");
    next();
});



var cus_port = '3000';
var db_url_for_connect = 'mongodb://localhost:27017/society';
//var db_url_for_connect = 'mongodb://itprakhar:prakhar123@ds113200.mlab.com:13200/society';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const signup = new mongoose.Schema({
    username: { type: String, index: true, unique: true,uppercase:true },
    towerno: { type: String },
    flatno: { type: Number, min: 3, index: true },
    email: { type: String },
    mobile: { type: Number, min: 10 },
    passwordOne: { type: String, min: 8 },
    date: { type: Date, default: Date.now }
});
const issueTable = new mongoose.Schema({
    
});

const customer = mongoose.model('customer', signup);

router.route('/register').post(function(req, res) {
    mongoose.connect(db_url_for_connect).then(item => { console.log("Connected") }).catch(err => { console.log("this is famous error " + err) });

    var signupData = new customer(req.body);
    console.log(signupData);
    customer.findOne({ 'username': signupData.username }, (err, doc) => {

        /**
         * if condition works when username is available
         * signup data send to database server return value 1 
         * else condition works when username already exist 
         * return value 0
         */

        if (doc == null) {
            signupData.save()
                .then(item => {
                    console.log(item);

                    console.log("Data save to data base");
                    res.json({ value: 1 });


                })
                .catch(err => {
                    res.status(400).send("unable to save to database");
                });
                mongoose.connection.close();


        } else {
            res.json({ value: 0 });
            mongoose.connection.close();
        }

        
    });









});

router.route('/login').post(function(req, res) {
    mongoose.connect(db_url_for_connect).then(item => { console.log("Connected") }).catch(err => { console.log("this is famous error " + err) });
    var loginData = new customer(req.body);
    console.log(loginData);
    customer.find({ username: loginData.username, passwordOne: loginData.passwordOne }, (err, doc) => {

        /**
         * if condition works when username & password is available
         * signup data send to database server return value 1 
         * else condition works when username not exist 
         * return value 0
         */
        console.log(doc);

        if (doc.length != 0) {
            console.log(doc.username);
            res.json({ value: 1, user: doc.username });


        } else {
            res.json({ value: 0 });
        }
        mongoose.connection.close();

    });

});
router.route("/saveissue").post(function(req,res){

});


app.use('/api', router);
app.listen(cus_port, () => {
    console.log(`Db server api with express starts on ${cus_port}`);
})