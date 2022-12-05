import { useState } from 'react'
import './App.css'

import CreateComment from './components/comment/CreateComment'
import GetCommet from './components/comment/GetComment'

import CreatePost from './components/post/CreatePost'
import GetPost from './components/post/GetPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CreatePost />
      <GetPost/>
      <GetCommet/>
      <CreateComment />
    </div>
  )
}

export default App
