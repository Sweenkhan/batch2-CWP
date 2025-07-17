import React from 'react'
import dummyProducts from '../assets/data/productData'
import ProductCard from '../components/ProductCard' 




function Products() {
  return (
  <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       

  {
   dummyProducts.map((product) => {
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