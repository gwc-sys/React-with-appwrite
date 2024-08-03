import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
      axios.get('/api/jokes')
      .then((Response) => {
        setJokes(Response.data)
      })
      .catch((error) =>{
        console.log(Error)
      })
  });

  return (
    <>
    <h1> Hello world </h1>
    <p>JOKES:{jokes.length}</p>
    {
      jokes.map((jokes , index) =>(
        <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App

