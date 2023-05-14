import React, { useEffect } from "react";
import {useParams,useNavigate} from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");
  const params = useParams();
  const Navigate = useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails = async () =>{
    let result = await fetch(`http://localhost:4001/product/${params.id}`)
    result = await result.json();
    
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setLocation(result.location)
  }


  const UpdateProduct = async () => {
    console.warn(name,price,category,location);
    let result = await fetch(`http://localhost:4001/product/${params.id}`,{
      method:'Put',
      body: JSON.stringify({name,price,category,location}),
      headers:{
        'Content-Type': 'Application/json'
    }
    });
    result = await result.json();
    if(result){
      Navigate('/');
    }

  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter product name"
        value={name}
        className="inputBox"
      />
      

      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Enter product price"
        value={price}
        className="inputBox"
      />
      

      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        placeholder="Enter product category"
        value={category}
        className="inputBox"
      />
      


      <input
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        type="text"
        placeholder="Enter product location"
        value={location}
        className="inputBox"
      />
      


      <button onClick={UpdateProduct} className="appButton" type="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
