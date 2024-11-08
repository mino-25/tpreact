import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Put = () => {
  const [articles, setArticles] = useState([]);
  const [selectArticleId, setSelectedArticleId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: 0,
    content: "",
    stock: 0,
    online: false,
    picture: "",
  });

  useEffect(() => {
    const fetchbyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/article/get");
        setArticles(data);
        console.log("Articles fetched:", data);
      } catch (error) {
        console.error("C'est chaud on capte pas les données:", error.message);
      }
    };
    fetchbyUser();
  }, []);


  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    setSelectedArticleId(selectedId);

   
    const selectedArticle = articles.map(article => article.id === selectedId);
    if (selectedArticle) {
      setFormData({
        name: selectedArticle.name,
        category: selectedArticle.category,
        brand: selectedArticle.brand,
        price: selectedArticle.price,
        content: selectedArticle.content,
        stock: selectedArticle.stock,
        online: selectedArticle.online,
        picture: selectedArticle.picture,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      picture: [{ img: formData.picture }],
    };

    try {
      const response = await axios.put(`http://localhost:8000/api/article/update/${selectArticleId}`, updatedData);
      console.log("Article mis à jour avec succès:", response.data);

      const { data } = await axios.get("http://localhost:8000/api/article/get");
      setArticles(data);
    } catch (error) {
      console.log("Erreur lors de la mise à jour de l'article:", error);
    }
  };

  return (
    <div>
      <h2>Sélectionnez un article à mettre à jour</h2>
      <select onChange={handleSelectChange} value={selectArticleId || ""}>
        <option value="">Sélectionner un article</option>
        {articles.map((article) => (
          <option key={article.id} value={article.id}>
            {article.name}
          </option>
        ))}
      </select>

      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          placeholder="Nom de l'article"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Catégorie</label>
        <input
          type="text"
          placeholder="Catégorie de l'article"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label htmlFor="brand">Marque</label>
        <input
          type="text"
          placeholder="Marque de l'article"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Prix</label>
        <input
          type="number"
          placeholder="Prix de l'article"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="content">Description</label>
        <input
          type="text"
          placeholder="Description de l'article"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          placeholder="Stock de l'article"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <label htmlFor="picture">Image</label>
        <input
          type="text"
          placeholder="Lien pour une image"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          required
        />

        <button type="submit">Mettre à jour l'article</button>
      </form>
    </div>
  );
};

export default Put;
