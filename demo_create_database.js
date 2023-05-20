const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017/mydb";
    const client = new MongoClient(uri);

    try {
        console.log('Estabelecendo conexão..');
        await client.connect();
        console.log('Banco de dados criado!');
        
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);