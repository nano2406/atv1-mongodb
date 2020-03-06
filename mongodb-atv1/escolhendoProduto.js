var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  var dbo = db.db("loja");
  var query = {"quantity" : "5"};
  dbo.collection("produtos").find(query).toArray(function(erro, result) {
    if (erro) throw erro;
    console.log(result);
    db.close();
});
});