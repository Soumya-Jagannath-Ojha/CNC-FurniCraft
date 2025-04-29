import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [showModal, setShowModal] = useState(false);

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
      <button
        onClick={() => setShowModal(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 ..."
      >
        Toggle modal
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button onClick={() => setShowModal(false)}>❌</button>
            </div>
            {/* form here */}
          </div>
        </div>
      )}

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
