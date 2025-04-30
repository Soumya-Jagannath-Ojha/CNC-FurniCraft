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
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
