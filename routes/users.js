const { default: mongoose } = require("mongoose");
const plm=  require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authentication");

const userschema=mongoose.Schema({
  username: String,
  password: String,
  secret: String
});

userschema.plugin(plm);
module.exports= mongoose.model("user",userschema);