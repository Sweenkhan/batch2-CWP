 import {Link} from "react-router-dom"

 
function ProductCard({productData}) {



  function handleProductClcik(productData){
         console.log(productData)
  }



  return (
    <div key={productData.id} className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 " style={{padding: "5px"}}>
     
      <img
        className="w-full h-56 object-cover"
        src={productData.image}
        alt={productData.title}
        onClick={() => handleProductClcik(productData)}
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{productData.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">
         {productData.description.length > 40 ? `${productData.description.substring(0, 40)}....` : productData.description }
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-indigo-600">Rs {productData.price}</span>
          <button style={{padding: "3px 6px"}} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
