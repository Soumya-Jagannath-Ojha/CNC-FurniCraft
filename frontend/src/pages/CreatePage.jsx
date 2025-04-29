import React from "react";
import { useState } from "react";
import { useProductStore } from "../store/product.js";
import { ToastContainer, toast } from 'react-toastify';

const CreatePage = () => {

  const [newProduct,setNewProduct] = useState({
    name: "",
    price:"",
    image:"",
  })
  const {createProduct} = useProductStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill in all fields.");
      return;
    }
    // Handle form submission (e.g., send data to API)
    // console.log({ productName, price, image });
  };

  const handleAddProduct = async()=>{
    console.log(newProduct);

    const {success,message} = await createProduct(newProduct);

    if(!success){
      toast('Error ',message);
    }else{
      toast('Success! ')
    }
    console.log("Success:", success);
    console.log("Message:", message);
    
    setNewProduct({name: "", price: "", image: ""});
    
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Create Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 dark:text-white font-medium">
            Product Name
          </label>
          <input
            type="text"
            className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            placeholder="Enter product name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 dark:text-white font-medium">
            Price ($)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            placeholder="Enter price"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 dark:text-white font-medium">
            Product Image
          </label>
          {/* <input
          type="file"
          className="w-full px-3 py-2 text-white border rounded-lg"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        /> */}

          <input
            type="text"
            className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            placeholder="Enter Image URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleAddProduct}
        >
          Create Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePage;
