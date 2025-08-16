import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/features/productSlice'


function Products() {

  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state => state.products))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  if (loading) return <p style={{ margin: "7rem" }}>Loading products...</p>
  if (error) return <p style={{ margin: "7rem" }} > Error: {error}</p>

  
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        items.map((product, index) => {
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