let btn = document.querySelector("button")
let productsElement = document.querySelector(".products")


function fetchData() {

    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            return response.json()
        }).then((response) => {
            renderingProduct(response)
        })
}

function renderingProduct(products) {
    products.forEach((product) => {

        let productDiv = document.createElement("div")
        let imageElement = document.createElement("img")
        let titleElement = document.createElement("h5")
        let priceElement = document.createElement("h3")
        let freeDelivery = document.createElement("p")

        let reviewDiv = document.createElement("div")
        let ratingElement = document.createElement("p")
        let countElement = document.createElement("p")

        productDiv.classList.add("product")

        productsElement.appendChild(productDiv)

        imageElement.setAttribute("src", product.image)
        productDiv.appendChild(imageElement)

        titleElement.textContent = product.title.length < 25 ? product.title : `${product.title.substring(0, 23)}...`
        productDiv.appendChild(titleElement)

        priceElement.textContent = `₹ ${product.price}`
        productDiv.appendChild(priceElement)

        freeDelivery.textContent = "Free Delivery"
        freeDelivery.classList.add("free")
        productDiv.appendChild(freeDelivery)

        productDiv.appendChild(reviewDiv)
        reviewDiv.classList.add("review")
        ratingElement.innerText = `${product.rating.rate} ★`
        ratingElement.classList.add("rating")
        reviewDiv.appendChild(ratingElement)

        countElement.innerHTML = `${product.rating.count} Reviews </span>`
        countElement.classList.add("count")
        reviewDiv.appendChild(countElement)

        console.log(productDiv)

    })

}

btn.addEventListener("click", fetchData)