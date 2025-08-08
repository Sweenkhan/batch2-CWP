import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";


function ProductCard({ productData }) {



  const { setProductDetail } = useContext(ProfileContext) 
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()
  let navigate = useNavigate()
 console.log(cartItems)



  function handleProductClcik(productData) {
    localStorage.setItem("productDataId", productData.id)
    setProductDetail(productData)
    navigate("/productDetail")
  }



return (
  <div key={productData.id} className="  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 " style={{ padding: "20px" }}>

    <img
      className=" h-56 w-full object-cover "
      src={productData.image}
      alt={productData.title}
      onClick={() => handleProductClcik(productData)}
    />

    <div className="p-5 " style={{ marginTop: "18px" }}>
      <h3 className="text-lg font-semibold text-gray-800">{productData.title.length > 30 ? `${productData.title.substring(0, 30)}` : productData.title}</h3>
      <p className="text-gray-600 mt-2 text-sm">
        {productData.description.length > 40 ? `${productData.description.substring(0, 40)}....` : productData.description}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold text-indigo-600">Rs {productData.price}</span>
        <button onClick={() => dispatch(addToCart(productData.id))} style={{ padding: "3px 6px" }} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
}

export default ProductCard;
