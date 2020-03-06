var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


//primeiro produto
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("loja");
  dbo.collection("produtos").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//ultimo produto
MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db("loja");
    var mysort = { _id: -1 };
    dbo.collection('produtos').find({}).sort(mysort).limit(1).toArray(
        function (erro, resul) {
            if (err) throw err;
            console.log(resul);
        });
});