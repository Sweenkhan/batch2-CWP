let input = document.querySelector("input");
let btn = document.querySelector("button");
let unOrderlist = document.querySelector("ul");

btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please fill out the input");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button class="delete">x </button>`

    unOrderlist.appendChild(li);
    li.lastElementChild.addEventListener("click", () => {
        li.remove(); 
    })

    input.value = "";
})
