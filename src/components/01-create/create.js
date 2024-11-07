import React, { useState } from "react"
import axios from 'axios'

const Create = () => {
  const [article, setArticle] = useState(
    {
      array: [],
      name: "",
      category: "",
      brand: "",
      price: 0,
      content: "",
      stock: 0,
      online: false,
      picture: "",
    },
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticle((article) => ({ ...article, [name]: value }));
    console.log(article);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      name: article.name,
      category: article.category,
      brand: article.brand,
      price: article.price,
      content: article.content,
      stock: article.stock,
      online: article.online,
      picture: article.picture,
    };

    article.array.push(product);
    axios.post(" http://localhost:8000/api/article/add ", {product})
    console.log(article.array);
  };
  

  return (
    <div>
      <h1>Create Article </h1>
      {article.array.map((product, index) => (
        
          <div key={index}>
            <p>{product.name}</p>
            <img src={product.picture} width={50} alt="picture" />
          </div>
      ))}
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="Name of the article"
          name="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="category"></label>
        <input
          type="text"
          placeholder="Category of the article"
          name="category"
          onChange={handleChange}
          required
        />

        <label htmlFor="brand"></label>
        <input
          type="text"
          placeholder="Brand of the article"
          name="brand"
          onChange={handleChange}
          required
        />
        <label htmlFor="price"></label>
        <input
          type="number"
          placeholder="Price of the article"
          name="price"
          onChange={handleChange}
          required
        />
        <label htmlFor="content"></label>
        <input
          type="text"
          placeholder="Description of the article"
          name="content"
          onChange={handleChange}
          required
        />
        <label htmlFor="stock"></label>
        <input
          type="number"
          placeholder="Stock of the article"
          name="stock"
          onChange={handleChange}
          required
        />
        <label htmlFor="picture"></label>
        <input
          type="text"
          placeholder="Link for a picture"
          name="picture"
          onChange={handleChange}
          required
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default Create
