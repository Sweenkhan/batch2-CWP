//  import dummyProducts from '../assets/data/productData'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import axios from "axios"




function Products() {

  const [productsData, setProductsData] = useState([])

  useEffect(() => {

    function fecthData() {

      axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          setProductsData(res.data)
        })
    }

    fecthData()

  }, [])



  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


      {
        productsData.map((product, index) => {
          return (
            <ProductCard
              key={index}
              productData={product} 
            />
          )
        })
      }





    </div>
  )
}

export default Products