const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);
    
    console.log('Estabelecendo conexão..');

    try {
        await client.connect();
        console.log('Listando bancos de dados..');
        
        await listDatabases(client);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}