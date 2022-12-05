const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

const comments = [
    {
        id:23,
        postId: 12,
        content: 'first commmet'
     }
    
]

app.get('/comment', (req, res)=>{
    
    res.status(200).json(comments)
})


app.post('/comment', (req,res)=>{

    const comment = req.body
    comments.push(comment)

    res.status(201).json(comments)
})


app.listen(PORT, ()=>{
    console.log('Server listening')
})