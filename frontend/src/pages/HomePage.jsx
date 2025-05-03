import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEdit = (id) => {
    console.log("Edit product with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete product with id:", id);
  };

  return (
    <>
     

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            
          />
        ))}
      </div> */}


        <div>{products.length}</div>
        
      <div className="p-4">
      {products.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-xl font-semibold text-gray-700 dark:text-black">
            No products found.
          </p>
          <Link
            to="/create"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create New Product
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default HomePage;
