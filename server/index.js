const express=require('express');
const app=express();        //initializing express app
const dotenv=require('dotenv')
// const connectDB=require('./Config/db')
const mongoose=require('mongoose');
dotenv.config({path:__dirname+ '/.env'});
const schema=require('./schema/schema')//requiring schema from schema file
const {graphqlHTTP}=require('express-graphql');
//mongoose models
const Project=require('./models/projects');
const Client=require('./models/clients')


console.log(process.env.MONGO_URI)

//connecting to database

mongoose.connect("mongodb+srv://nikeshkumartk:nikeshnikhil@cluster0.gg9nfhw.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
       }).then(console.log("DATABASE CONECTED")).catch((err)=>console.log(err))

const port=process.env.PORT||5000; //configuring port to run server using .env file

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(port,()=>console.log(`server started on port ${port}`));