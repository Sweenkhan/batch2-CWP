//  import dummyProducts from '../assets/data/productData'
import ProductCard from '../components/ProductCard' 
import { useEffect,  useState } from 'react' 
import axios from "axios"




function Products() {

  const [productsData, setProductsData] = useState([])


   useEffect(() => {


      function fecthData(){
          
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          // console.log(res.data)
          setProductsData(res.data)
        })

      }

       fecthData()

      // fetch("https://fakestoreapi.com/products")
      // .then((res) => res.json())
      // .then((res) => {
      //      console.log(res)
      // })

   },  [])



  return (
  <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       

  {
   productsData.map((product) => {
    return (
          <ProductCard 
            productData = {product}

        //   key={product.id}
        //  image={product.image}
        //  title={product.title}
        //  description={product.description}
        //  price={product.price}
   /> 
    )
   })
  }

   

     

    </div>
  )
}

export default Products