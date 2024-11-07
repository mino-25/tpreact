import React, { useState } from "react"
import axios from 'axios'

const Exemple = () => {

  const handleExemple = async() => {
   const {data} = await axios.post(" http://localhost:8000/api/article/add ", {
        name: 'Air Jordan',
        category: 'Basket',
        brand: 'Nike',
        price: 100,
        content: 'Good snickers',
        stock: 2000,
        online: false,
        picture: [{
          img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/715/272/original/16357_01.jpg.jpeg?action=crop&width=750"
        }]
    } )
  };
  

  return (
    <div>
        <h1>Exemple</h1>
        <button onClick={handleExemple}> Add </button>
    
    </div>
  );
};

export default Exemple
