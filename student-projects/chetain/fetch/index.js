// Note: An API (Application Programming Interface) in JavaScript serves as an interface
//  that allows interaction with external systems or web services. It provides predefined methods
//  and protocols for requesting and exchanging data. JavaScript can interact with various types of APIs,

let btn = document.querySelector("button");
let div = document.querySelector(".wrapper")



function clickAndFetch() {

    fetch("https://randomuser.me/api/?results=20")
        .then((data) => {
            return data.json();
        })
        .then((res) => {
            fetchData(res.results)
        })
        .catch((error) => {
            console.log(error);
        });
}


function fetchData(data) {

    
    div.innerHTML = ""

    data.forEach((profile) => {
        let user = document.createElement("div")
        
        let newDiv = document.createElement("div")
        newDiv.className = "user-img"
        
        let img = document.createElement("img")
        newDiv.appendChild(img)
        img.setAttribute("src", profile.picture.large)
        
        user.appendChild(newDiv)            //main div
        
        let newDiv1 = document.createElement("div")
        newDiv1.className = "user-data"
        div.appendChild(newDiv1)
        
        let p = document.createElement("p")
        p.innerHTML = `<span>Name : </span>${profile.name.first} ${profile.name.last}`
        newDiv1.appendChild(p)
        
        let emailELement = document.createElement("p")
        emailELement.innerHTML = `<span>Email : </span>${profile.email}`
        newDiv1.appendChild(emailELement)
        
        let ageElement = document.createElement("p")
        ageElement.innerHTML = `<span>Age : </span>${profile.dob.age}`
        newDiv1.appendChild(ageElement)
        
        let phoneElement = document.createElement("p")
        phoneElement.innerHTML = `<span>Phone : </span>${profile.phone}`
        newDiv1.appendChild(phoneElement)
        user.appendChild(newDiv1)

        user.classList.add("user")
        div.appendChild(user)
    });
}

btn.addEventListener("click", clickAndFetch)