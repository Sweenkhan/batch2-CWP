import ProductCard from '../components/ProductCard'
import { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/features/productSlice'
import { ProfileContext } from '../App'


function Products() {

  const {query} = useContext(ProfileContext)
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state => state.products))
  const [filterProduct, setFilterProduct] = useState([])


  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  

   
  useEffect(() => {
    if(query && query.trim() != ""){

    let filterData =  items.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
        setFilterProduct(filterData)
    } else {
      setFilterProduct(items)
    }

  }, [query, items])
 

  
  if (loading) return <p style={{ margin: "7rem" }}>Loading products...</p>
  if (error) return <p style={{ margin: "7rem" }} > Error: {error}</p>

  
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        filterProduct.map((product, index) => {
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