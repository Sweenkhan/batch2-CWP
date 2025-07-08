//  let btn = document.querySelector("button");
// let div = document.querySelector(".user")

 
// function clickAndFetch(){

// fetch("https://randomuser.me/api/?results=20")
//     .then((data) => {
//         return data.json();
//     })
//     .then((res) => { 
//           fetchData(res.results[0])
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }


// function fetchData(data){
//     div.style.display = "flex";
//     div.innerHTML = ""; // Clear previous content
//      data.forEach(profile => {
//     let name = document.createElement("h1");
//     name.innerText = `${data.name.first} ${data.name.last}`;
//     let img = document.createElement("img");
//     img.src = data.picture.large;

//     let email = document.createElement("p");
//     email.innerText = `Email: ${data.email}`;

//     let state = document.createElement("p");
//     state.innerText = `State: ${data.location.state}`;

//     let country = document.createElement("p");
//     country.innerText = `Country: ${data.location.country}`;
     

//     div.append(name, img, email, state, country);
//     console.log(data);
//      });
//      }
// btn.addEventListener("click", clickAndFetch)
 
  
 let btn = document.querySelector("button");
let div = document.querySelector(".users")



function clickAndFetch(){
   
    fetch("https://randomuser.me/api/?results=20")
    .then((data) => {
        return data.json();
    })
    .then((res) => {
          fetchData(res.results)
    })
    .catch((err) => {
        console.log(err);
    });
}
    function fetchData(data){
          console.log(data)
            div.innerHTML = ""
           div.style.display = "flex"
           data.forEach(profile => {
 
           let p = document.createElement("p")
           let img = document.createElement("img")
           let emailELement = document.createElement("p")
           let locationELement = document.createElement("p")
 
           let userElement = document.createElement("div")
           userElement.classList.add("user")
         
           img.setAttribute("src", profile.picture.large)
           userElement.appendChild(img)
 
           p.innerText = `Name: ${profile.name.first}`
            userElement.appendChild(p)
 
            emailELement.innerText = `Email: ${profile.email}`
            userElement.appendChild(emailELement)
           
            locationELement.innerText = `City: ${profile.location.city}`
            userElement.appendChild(locationELement)
           
            div.appendChild(userElement)
             });
           
    }
 
   
btn.addEventListener("click", clickAndFetch)
 
 