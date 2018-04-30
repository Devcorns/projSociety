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

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const signup = new mongoose.Schema({
    username: { type: String, index: true, unique: true },
    towerno: { type: String },
    flatno: { type: Number, min: 3, index: true },
    email: { type: String },
    mobile: { type: Number, min: 10 },
    passwordOne: { type: String, min: 8 },
    date: { type: Date, default: Date.now }
});

const customer = mongoose.model('customer', signup);

router.route('/register').post(function(req, res) {
    mongoose.connect(db_url_for_connect).then(item => { console.log("Connected") }).catch(err => { console.log("this is famous error " + err) });

    var signupData = new customer(req.body);
    customer.find({}, (err, data) => {});
    try {
        signupData.save()
            .then(item => {
                console.log(item);
                res.json(req.body);


            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });


    } catch (e) {
        console.log("error found" + e);
    }





});


app.use('/api', router);
app.listen(cus_port, () => {
    console.log(`Db server api with express starts on ${cus_port}`);
})