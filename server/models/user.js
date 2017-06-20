var mongoose = require('mongoose');

var user=mongoose.model('User',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    defualt:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});



module.exports = {
  user
}
