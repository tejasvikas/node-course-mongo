//const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to Insert to Server', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Vikas',
    age: 33,
    location: 'Some Location in Redmond'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to Insert to Server', err);
    }
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();

});
