var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  var myobj = { name: "produto1", price: "1", quantity: "1" };
  dbo.collection("produtos").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  var myobj = { name: "produto2", price: "2", quantity: "2" };
  dbo.collection("produtos").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  var myobj = { name: "produto3", price: "3", quantity: "3" };
  dbo.collection("produtos").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  var myobj = { name: "produto4", price: "4", quantity: "4" };
  dbo.collection("produtos").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  var myobj = { name: "produto5", price: "5", quantity: "5" };
  dbo.collection("produtos").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});