let input = document.querySelector("input")
let saveBtn = document.querySelector("button")
let ul = document.querySelector("ul")

saveBtn.addEventListener("click", () => {
    if (input.value === ""){
        alert("please enter your input in the input field")
        return
    }
    let li = document.createElement("li")
    li.innerHTML = `${input.value} <button class ="delete">x</button>`

    ul.appendChild(li)
    input.value = ""

    li.firstElementChild.addEventListener("click", () => {
        li.remove()
    })
})