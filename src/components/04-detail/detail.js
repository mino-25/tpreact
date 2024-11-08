import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [product, setProduct] = useState({})
  const [check, setCheck] = useState(false) 
  const {productId} = useParams()

  useEffect(() => {
    const fetchbyUser = async() => {
      try {
        const {data} = await axios.get(`http://localhost:8000/api/article/get/${productId}`)
        setProduct(data)
        setCheck(true)
        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchbyUser()
  }, [])
  console.log(product);
  

  return (
    <div>
      <h1>Detail</h1>
          <p>{product.name}</p>
          <img src={setCheck && product.picture[0].img} width={50} alt="picture" />
          <p>Price : {product.price}</p>
          <p>Descritption : {product.content}</p>
          <p>Stock : {product.stock}</p>
    </div>
  )
}

export default Detail