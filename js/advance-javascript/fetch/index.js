// note: An API (Application Programming Interface) in JavaScript serves as an interface
//  that allows interaction with external systems or web services. It provides predefined methods
//  and protocols for requesting and exchanging data. JavaScript can interact with various types of APIs,

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

           data.forEach(profile => {
            
               let userELement = document.createElement("div")
               let h2 = document.createElement("h3")
               let img = document.createElement("img")
               let emailELement = document.createElement("p")
               let mobileELement = document.createElement("p")
               let ageELement = document.createElement("p")
               let contentDiv = document.createElement("div")

               img.setAttribute("src", profile.picture.large)
               userELement.appendChild(img)
               
               contentDiv.classList.add("contentDiv")
              

               h2.innerText = `${profile.name.title} ${profile.name.first}`
               contentDiv.appendChild(h2)
               
               let modifyEmail = profile.email.split(".").slice(1).join(".")
         
               emailELement.innerText = `Email: ${modifyEmail}` 
               contentDiv.appendChild(emailELement) 

               mobileELement.textContent = `Contact: ${profile.cell}` 
               contentDiv.appendChild(mobileELement)
               
               ageELement.textContent = `Age: ${profile.dob.age} years`
               contentDiv.appendChild(ageELement)

               userELement.classList.add("user")
               div.appendChild(userELement)
               userELement.appendChild(contentDiv)
            });
    }


    btn.addEventListener("click", clickAndFetch);
    
    
    
    // btn.addEventListener("click", startFecthing)

 


 