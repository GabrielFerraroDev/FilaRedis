const express = require('express')
const UserController = require('./app/controllers/UserController')


const app = express()
app.use(express.json())
app.post('/users',UserController.store)

app.listen(3333,()=>{
    console.log("Rodando na porta 3333");
})