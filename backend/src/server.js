const express = require('express')
const moongose = require('mongoose')
const cors = require('cors')
const app = express()
const server = require('http').Server(app) 
const io = require('socket.io')(server)
const object = {}
io.on('connection', socket =>{
const {user} = socket.handshake.query
object[user] = socket.id
})

moongose.connect('mongodb+srv://team-dev:senha@cluster0-4ohl9.mongodb.net/test?retryWrites=true&w=majority',{
 useUnifiedTopology:true,
 useNewUrlParser:true  
}) 
app.use((req,res,next)=>{
    
})