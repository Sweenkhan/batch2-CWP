let btn = document.querySelector("button")
let productsELement = document.querySelector(".products")


function fetchData(){

    fetch("https://fakestoreapi.com/products")
    .then((response) =>{
        return response.json()
    }).then((response) =>{
        // console.log(response)
        renderingProduct(response)         
    })

}


function renderingProduct(products){  
    
     products.forEach((product) =>{ 

         console.log(product)

         let productDiv = document.createElement("div")
         let imageElement = document.createElement("img")
        //  let contentElement = document.createElement("div")
         let titleElement = document.createElement("h5")
         let priceElement = document.createElement("h2")
         let ratingElement = document.createElement("p")


         productDiv.classList.add("product")

         imageElement.setAttribute("src", product.image)
         productDiv.appendChild(imageElement)

         titleElement.textContent = product.title.length < 25 ? product.title : product.title.substring(0, 25)
          productDiv.appendChild(titleElement)
        //  contentElement.appendChild(titleElement)
          
         priceElement.textContent =` $ ${product.price}`
         productDiv.appendChild(priceElement)
        //  contentElement.appendChild(priceElement)

         ratingElement.textContent  = `${product.rating.rate} ★`
         ratingElement.classList.add("rating") 
         productDiv.appendChild(ratingElement)

        //  contentElement.append(ratingElement) 
        //  productDiv.appendChild(contentElement)
         productsELement.appendChild(productDiv)
     })
}



btn.addEventListener("click", fetchData)