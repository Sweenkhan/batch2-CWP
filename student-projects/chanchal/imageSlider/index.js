let slider = document.querySelector(".images")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let allImages = document.querySelectorAll("img")
let width = 500;
let currentPx = 0;
console.log(width);
next.addEventListener("click",() => {
     if(currentPx === (allImages.length-1) * 500){
        currentPx = 0
        slider.style.left = `-${currentPx}px`
        alert("hello this is last image")
        return
     }
   
     currentPx += width
     slider.style.left = `-${currentPx}px`
     console.log(currentPx)
     
})
  
prev.addEventListener("click",() => {
    if(currentPx === 0){
        alert("this is the first image")
        // 
    }else{
        currentPx -=width
        slider.style.left = `-${currentPx}px`
        console.log(currentPx)
    }
    
})