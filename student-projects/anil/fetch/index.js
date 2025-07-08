document.getElementById('fetch-btn')
.addEventListener('click', function() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
               
                document.getElementById('user-info').innerHTML = `
                    <img src="${user.picture.medium}" alt="User Picture" 
                    style="border-radius: 50%; width: 100px; height: 100px;">
                    <p>Name: ${user.name.first} ${user.name.last}</p>
                    <p>Email: ${user.email}</p>
                    <p>Country: ${user.location.country}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>instagram: ${user.login.username}</p>
                    <p>Age: ${user.dob.age}</p> `;
            })
            .catch(error => {
                document.getElementById('user-info').innerHTML = 'Error fetching user data.';
            });
    });
   

// let btn =document.querySelector("button")
// let div =document.querySelector(".user") 

// fetch ("https://randomuser.me/api/?results=2")
// .then( (data) => {
//    return data.json()
// })
// .then ( () => {
//     return data.result[0]
// })
// .then( (profile)=> {
//     console.log(profile)
// })