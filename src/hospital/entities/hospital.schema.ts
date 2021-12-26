import * as Mongoose  from "mongoose";

export const HospitalSchema=new Mongoose.Schema({
  name:{
    type:String
  },
  
 email:{
   type:String
 },
  place:{
    type:String
  },
  
})