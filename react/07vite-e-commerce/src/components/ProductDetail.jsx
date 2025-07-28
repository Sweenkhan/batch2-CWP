import React,{useContext, useEffect} from 'react' 
import { ProfileContext } from '../App'
import axios from 'axios'


function ProductDetail() {
 
  const {productDetail, setProductDetail}  = useContext(ProfileContext)


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${localStorage.getItem("productDataId")}`)
    .then((res) => { 
       setProductDetail(res.data)
    })
  }, [])



  return (
   <div key={productDetail.id} className=" max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 " style={{ padding: "20px" }}>

      <img
        className=" h-56 w-full object-cover "
        src={productDetail.image}
        alt={productDetail.title} 
      />

      <div className="p-5 " style={{ marginTop: "18px" }}>
        <h3 className="text-lg font-semibold text-gray-800">{productDetail.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">
          {productDetail.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-indigo-600">Rs {productDetail.price}</span>
          <button style={{ padding: "3px 6px" }} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail