import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [articles, setArticles] = useState({})

    useEffect(() => {
        const fetchbyUser = async() => {
          try {
            const {data} = await axios.get(" http://localhost:8000/api/article/get")
            setArticles(data)
            
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchbyUser()
      }, [])
  return (
    <div>
        <h1>Home Page</h1>
        <p>{articles.name}</p>
    </div>
  )
}

export default Home