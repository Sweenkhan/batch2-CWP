
  // ----------------------------accessing property for element----------------------------------------
 let heading = document.getElementById("first-heading")                      //access by id
let heading1 = document.getElementsByTagName("h2")[0]                        //access by tagname
let heading2 = document.getElementsByClassName("list")
let heading3 = document.getElementsByName("f-heading")[0]


let input = document.querySelector("input[type='password']")

 input.style.padding = "5px"
  


let title = document.querySelector("h2")
let title2 = document.querySelector(".heading")
let title3 = document.querySelector("#first-heading")

let list = document.querySelector(".list")
let list2 = document.querySelectorAll(".list")
let para = document.querySelector(".paragraph")


// for(let i = 0; i < list2.length; i++){
 
//     if(list2[i].innerText === "Content"){
//         list2[i].style.color = "red"
//     }
// }



// style with dom:
list.style.color = "green"


// innerHTML,innerText, textContent   (difference between this)

// console.log(para.innerHTML)               //text and if tag is available that will also come
// console.log(para.innerText)               //only you will get the text content
// console.log(para.textContent)             //you will get all the context, does'nt matter if its not visible


// para.innerText = "hi, today's class is over. and we have learned about dom. "
list.innerHTML = `<span>welcome</sapn> to our website`

 list.innerHTML = ""              //remove elements



// notes :

// accessing Elements in dom

// upadating elements text
// remove Elements from dom
// creating elements

// adding style through dom
// adding class (remove, delete, replace)
// adding attributes (add, remove, replace)       atrr(src, id, class, href, width, height)


