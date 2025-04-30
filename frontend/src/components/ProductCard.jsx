import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const handleUpdatedProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toast.error(message);
    } else {
      toast.success("product updated successfully!")
    }

    setShowModal(false);

    

 
    


  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white dark:bg-gray-700 rounded-lg p-6 w-full max-w-md">
            <div className="relative mb-4 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                Update Product
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-0 text-xl"
              >
                ❌
              </button>
            </div>
            {/* form here */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault(); // ✅ Prevent refresh
                handleUpdatedProduct(product._id, updatedProduct);
              }}
            >
              {/* Product Name */}
              <div>
                <label className="block text-gray-700 dark:text-white font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter product name"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 dark:text-white font-medium">
                  Price (₹)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Enter price"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-gray-700 dark:text-white font-medium">
                  Product Image
                </label>

                <input
                  type="text"
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                  placeholder="Enter Image URL"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  // onClick={() => {
                  //   // e.preventDefault();
                  //   handleUpdatedProduct(product._id, updatedProduct);
                  // }}
                >
                  Edit Product
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-sm w-full bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover bg-gray-100"
        />

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ${product.price}
          </p>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              // onClick={() => handleUpdatedProduct(product._id, updateProduct)}
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleDeleteProduct(product._id)}}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </>

    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img className="rounded-tl-sm" src={product.image} alt={product.name} />
    //   </a>
    //   <div className="p-5">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {product.name}
    //       </h5>
    //     </a>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       Here are the biggest enterprise technology acquisitions of 2021 so
    //       far, in reverse chronological order.
    //     </p>
    //     <a
    //       href="#"
    //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Read more
    //       <svg
    //         className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </div>
    // </div>
  );
};

export default ProductCard;
