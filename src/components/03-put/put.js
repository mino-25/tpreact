import React ,{useEffect, useState}from 'react'
import axios from 'axios'

const Put = () => {

    const [articles, setArticles] = useState({})
    const [selectArticleId, setSelectedArticleId] = useState(null)
    const [formData, setFormData] = useState({
        name:"",
        category:"",
        brand: "",
        price: 0,
        content: "",
        stock: 0,
        online: false,
        picture: "",
    });

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

          const selectArticle = (article) => {
            setSelectedArticleId(article._id);
            setFormData({
                name: article.name,
                category: article.category,
                brand: article.brand,
                price: article.price,
                content: article.content,
                stock: article.stock,
                online: article.online,
                picture: article.picture ? article.picture[0].img : '',
            });
        };

          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({...formData, [name]: value});
          }
    
          const handleUpdate = async (e) => {
            e.preventDefault();
    
            const updatedData = {
                ...formData,
                picture: [{ img: formData.picture }],
            };
    
            try{
                const response = await axios.put(`http://localhost:8000/api/article/update/:idArticle/${selectArticleId}`, updatedData)
                console.log(response.data);
            }catch (error){
                console.log("Il y a une erreur dans la maj de l'article: ", error)
            }
        };
    
      return (
        <div>
        <form onSubmit={handleUpdate}>
            <label htmlFor="name"></label>
                <input
                type="text"
                placeholder="Name of the article"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />

            <label htmlFor="category"></label>
                <input
                type="text"
                placeholder="Category of the article"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                />

            <label htmlFor="brand"></label>
                <input
                type="text"
                placeholder="Brand of the article"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                />

            <label htmlFor="price"></label>
                <input
                type="number"
                placeholder="Price of the article"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                />

            <label htmlFor="content"></label>
                <input
                type="text"
                placeholder="Description of the article"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                />

            <label htmlFor="stock"></label>
                <input
                type="number"
                placeholder="Stock of the article"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                />

            <label htmlFor="picture"></label>
                <input
                type="text"
                placeholder="Link for a picture"
                name="picture"
                value={formData.picture}
                onChange={handleChange}
                required
                />
        </form>
        </div>
      )
    }
        

    


export default Put