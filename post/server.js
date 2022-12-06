const express = require('express')
const cors = require('cors')
const { randomByte } = require('crypto')

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

const posts = {}


app.get('/post', (req, res)=>{

    res.status(200).json(posts)
})

app.post('/', (req, res)=>{
    const {post} = req.body
    const id = randomByte(2).toString('hex')
    posts[id] = post
    
    res.status(201).json(posts)
})
app.listen(PORT, ()=>{
    console.log('Server listening')
})