//const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if(err) {
     return console.log('Unable to Connect to MongoDB Server');
   }
   console.log('Connected to MongoDB Server');

   db.collection('Todos').find({_id: new ObjectID('5a4ae19245d66c34bc2f3fca')}).toArray().then((docs) => {
     console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch todos', err);
   });

   //db.close();

});
