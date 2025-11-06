import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shreeyab:Phalange7@cluster0.avqsbno.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

