var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  dbo.collection("produtos").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  dbo.collection("produtos").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("loja");
    dbo.collection("produtos").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  dbo.collection("produtos").find({}).sort({"name" : "produto1"}).limit(1);
 
});

