const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

const comments = {}

app.get('/comment', (req, res)=>{
    
    res.status(200).json(comments)
})


app.post('/comment', (req,res)=>{

    const {comment} = req.body
    const id = randomByte(2).toString('hex')
    comments[id] = comment
    
    res.status(201).json(comments)
})


app.listen(PORT, ()=>{
    console.log('Server listening')
})