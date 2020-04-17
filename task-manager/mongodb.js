const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const ObjectId = mongodb.ObjectID

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('connection failed')
    }
    console.log('connected successfully')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Mohamed',
    //     age: 34

    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Khaled',
    //         age: 27
    //     },
    //     {
    //         name: 'Waseem',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'collect data from users',
    //     completed: true
    // },{
    //     description: 'create the website',
    //     completed: true
    // }, {
    //     description: 'do sanity',
    //     completed: false
    // }], (error, result) =>{
    //     if (error) {
    //         return console.log(error.errmsg)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({
    //     _id: new ObjectId("5e90844bf6a1403dccd22179")
    // },  (error, result) => {
    //     if (error) {
    //         return (error)
    //     }
    //     console.log(result)
    // }).sort({_id: -1} ).limit(1)

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteMany({
        description: 'create the website'
    }).then((result) => {
console.log(result.deletedCount)
    }).catch((error) => {
console.log(error)
    })
  client.close  
})
