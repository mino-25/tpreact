import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchbyUser = async() => {
          try {
            const {data} = await axios.get(" http://localhost:8000/api/article/get")
            setArticles(data)
            console.log(data)
            
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchbyUser()
      }, [])
  return (
    <div>
        <h1>Home Page</h1>
        {articles.map((product, index) =>(
          <Link to={{pathname: `detail/${product._id}`}}>
              <div key={index}>
              <p>{product.name}</p>
              <img src={product.picture[0].img} width={50} alt="picture" />
              <p>{product.price}$</p>
            </div>
          </Link>
        ) )}
    </div>
  )
}

export default Home