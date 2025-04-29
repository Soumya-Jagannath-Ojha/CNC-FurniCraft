import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from 'react-toastify';



const ProductCard = ({ product, onEdit, onDelete }) => {

    

    const {deleteProduct} = useProductStore();

    const handleDeleteProduct = async(pid)=>{
        const {success,message} = await deleteProduct(pid);

        if(!success){
            toast('Error ',message);
        }else{
            toast('Success  ',message);
        }
    }


    

  return (
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
          <p className="text-gray-600 dark:text-gray-300 mb-4">${product.price}</p>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
          <ToastContainer />
        </div>
        

      </div>

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
