// note: An API (Application Programming Interface) in JavaScript serves as an interface
//  that allows interaction with external systems or web services. It provides predefined methods
//  and protocols for requesting and exchanging data. JavaScript can interact with various types of APIs,

let btn = document.querySelector("button");
let div = document.querySelector(".user")

 
function clickAndFetch(){

    fetch("https://randomuser.me/api/?results=2")
    .then((data) => {
        return data.json();
    })
    .then((res) => { 
          fetchData(res.results[0])
    })
    .catch((err) => {
        console.log(err);
    });
}




    function fetchData(data){
          console.log(data)

           div.style.display = "flex"
           div.innerHTML = ""

           let p = document.createElement("p")
           let img = document.createElement("img")
           let emailELement = document.createElement("p")

           img.setAttribute("src", data.picture.large)
           div.appendChild(img)

           p.innerText = `name: ${data.name.first}`
            div.appendChild(p)

            emailELement.innerText = `Email: ${data.email}`
            emailELement.style.fontSize= "0.8rem"
            div.appendChild(emailELement)
            
    }

    
btn.addEventListener("click", clickAndFetch)

 

// btn.addEventListener("click", fetchData);

// async function fetchData1(){
//     try{
//         let data =  await fetch("https://randomuser.me/api/?results=2")
//         let modifyData = await data.json()
//         let response = modifyData
//             return response
//     } catch(err){
//         console.log(err)
//     }
// }