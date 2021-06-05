import mongodb from 'mongodb';

const url = "mongodb://localhost:27017/";

const getTasks = async () => {
    try {

        const mongoClient = mongodb.MongoClient(url, {
            useUnifiedTopology: true,
        });
        await mongoClient.connect();

        const db = mongoClient.db('todo');
        const collection = db.collection(('tasks'));
        const tasks = await collection.find().toArray();
        mongoClient.close();
        return tasks;

    } catch (err) {
        console.log('DB err: ');
        console.log(err);
    }
}

const addTask = async () => {
    try {

        const mongoClient = mongodb.MongoClient(url, {
            useUnifiedTopology: true,
        });
        await mongoClient.connect();

        const db = mongoClient.db('todo');
        console.log(db.serverStatus());
        const collection = db.collection(('tasks'));
        
        // add task()
        
    } catch (err) {
        
        console.log('DB err: ');
        console.log(err);

    } finally{

        await mongoClient.close();

    }
}

export {
    getTasks
};