let btn = document.querySelector("button");
// let div = document.querySelector(".user");
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

 

 