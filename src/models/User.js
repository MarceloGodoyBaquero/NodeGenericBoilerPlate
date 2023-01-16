import {Schema, model} from "mongoose";

const userSchema = new Schema({
  username:{
    type: String,
    unique: true,
    required: true
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    unique: true,
    required: true
  },
  roles:[{
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }],
}, {
  timestamps: true
})

export default model("User", userSchema)