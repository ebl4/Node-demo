var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    
    var dbo = db.db("mydb");

    myObj = {nome: "edson" , sobrenome : "lima"};

    dbo.collection("users").insertOne(myObj, function (err, res) {
        if (err) throw err;
        console.log("1 documento inserido!");
        db.close();
    });
});