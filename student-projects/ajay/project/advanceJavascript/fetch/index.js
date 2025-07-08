let div = document.querySelector(".user");
let btn = document.querySelector("button");


function clickAndFetch(){
    fetch("https://randomuser.me/api/?results=20")
    .then ((data)=> {
        return data.json();

    })
    .then((res) => {
        fetchData(res.results[0])
    })
    .catch((error) => {
        console.log(error);
    })

}


function fetchData(data){
    console.log(data)

 div.style.display = "flex"
div.innerHTML = ""

    let p = document.createElement("p");
    let img = document.createElement("img");
    let emailElement = document.createElement("p")
    let age = document.createElement("p")
let number = document.createElement("p")




img.setAttribute("src", data.picture.large)
div.appendChild(img)

p.innerHTML = `name: ${data.name.first} ${data.name.last}`
div.appendChild(p)

emailElement.innerHTML  = `email: ${data.email}`

div.appendChild(emailElement)
div.style.display ="flex"

age.innerHTML = `Sex: ${data.gender}, age: ${data.dob.age} years`
div.appendChild(age)

number.innerHTML = `M: ${data.phone}`
div.appendChild(number)


}
btn.addEventListener("click", clickAndFetch)
