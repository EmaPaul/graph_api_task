require("dotenv").config();
const express = require("express")
const {ApolloServer} = require('apollo-server-express')

const {typeDefs} = require('./typeDels')
const {resolvers} = require('./resolvers')


const {connectDB} = require('./db')
connectDB()

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to my api");
});

module.exports = app

 async function start(){

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    


    app.listen(3000, ()=>{
        console.log(`listening in http://localhost:${3000}/graphql`)
        console.log(`listening in http://localhost:${3000}`)
    })
}

start()