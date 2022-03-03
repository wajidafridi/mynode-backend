const mongoose=require('mongoose')

const connectDB = async()=>{
    try {
        const con=await mongoose.connect('mongodb+srv://admin:<password>@cluster0.gf0nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    } catch (error) {
        console.log("error");
    }
}