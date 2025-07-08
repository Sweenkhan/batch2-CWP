let btn = document.querySelector("button");
let div = document.querySelector(".card")

function renderUser(data) {
    console.log(data);
     //div.innerHTML = "";

    let p = document.createElement("p");
    p.innerHTML = `Name: ${data.name.first} ${data.name.last}`;
    div.appendChild(p);

    let img = document.createElement("img");
    img.src = data.picture.large;
    div.appendChild(img);

    let email = document.createElement("p");
    email.innerHTML = `email: ${data.email}`;
    div.appendChild(email);

    let location = document.createElement("p");
    location.innerHTML = `State: ${data.location.state}, Country: ${data.location.country}`;
    div.appendChild(location);
}

function fetcheveryclick() {
    fetch("https://randomuser.me/api/?results=5")
        .then((data) => data.json())
        .then((res) => {
            renderUser(res.results[0]);
        })
        .catch((err) => {
            console.log(err);
        });
}

btn.addEventListener("click", fetcheveryclick);




