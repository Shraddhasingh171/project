import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState(false);
  const addProduct = async () => {
    if (!name || !price || !location || !category) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, location);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userId);
    let result = await fetch("http://localhost:4001/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, location }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    alert("Product is added");
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter product name"
        value={name}
        className="inputBox"
      />
      {error && !name && <span className="invalid-input">Enter invalid name</span>}


      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Enter product price"
        value={price}
        className="inputBox"
      />
      {error && !price &&<span className="invalid-input">Enter invalid price</span>}


      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
        placeholder="Enter product category"
        value={category}
        className="inputBox"
      />
      {error && !category &&<span className="invalid-input">Enter invalid category</span>}


      <input
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        type="text"
        placeholder="Enter product location"
        value={location}
        className="inputBox"
      />
      {error && !location &&<span className="invalid-input">Enter invalid location</span>}


      <button onClick={addProduct} className="appButton" type="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
