var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db("mydb");
    if (err) throw err;
    
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Coleção criada!");
        db.close();
    });
});