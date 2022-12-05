const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

const posts = [
    {
        id: 12,
        title: 'First post'
    }
]

app.get('/post', (req, res)=>{

    res.status(200).json(posts)
})

app.post('/', (req, res)=>{
    const post = req.body
    
    posts.push(post)
    res.status(201).json(posts)
})
app.listen(PORT, ()=>{
    console.log('Server listening')
})