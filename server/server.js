var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

var newTodo = new Todo({
  text:'cook dinner'
});

newTodo.save().then((doc)=>{
  console.log('saved Todo',doc);
},(e)=>{
  console.log('unable to save Todo');
})
