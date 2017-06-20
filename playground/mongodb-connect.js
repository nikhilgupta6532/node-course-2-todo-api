const {MongoClient,ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('Unable to connect to the mongodb server');
    }
    // db.collection('Todos').insertOne({
    //   text:'something to do',
    //   completed: false,
    // },(err,result)=>{
    //   if(err){
    //     return console.log('unable to insert an item');
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // })
    // db.collection('Todos').find().count().then((count)=>{
    //   console.log('Count',count);
    // },(err)=>{
    //   if(err){
    //      console.log('unable to fetch');
    //   }
    // });
    // db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    //   console.log(JSON.stringify(result,undefined,2));
    // },(err)=>{
    //   if(err){
    //     console.log('unable to delte');
    //   }
    // })
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectId('59491bd2accde0157cf39ed6')},
      { $set:{
        completed: true
      }
    },{
      returnOriginal: false
    }).then((result)=>{
      console.log(result);
  })
     console.log('connected to mongodb server');
    //db.close();
});
