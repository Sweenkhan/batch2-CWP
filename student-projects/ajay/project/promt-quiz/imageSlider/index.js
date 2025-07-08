let slider = document.querySelector('.images')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let allImages = document.querySelectorAll('.image')

const imageWidth =  400

let currentPx = 0
console.log(allImages.length)
next.addEventListener("click", () => {
    if(currentPx ===  (allImages.length - 1) * imageWidth){
        currentPx = 0
    } else {
        currentPx += imageWidth
    }
    slider.style.left = `-${currentPx}px`
})

prev.addEventListener("click", () => {
    if(currentPx === 0){
        alert("This is the first image");
    } else {
        currentPx -= imageWidth
    }
    slider.style.left = `-${currentPx}px`
})
