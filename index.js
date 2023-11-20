const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const listItems = document.querySelector(".list__items")
const form = document.querySelector(".input__box")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(input.value == "") return alert("you must type a tast first")

    // createing the li item 
    let li = document.createElement("li")
    li.textContent = input.value
    li.classList.add('list__item')
    listItems.appendChild(li)

    // createting the btn that's delete the current li 
    let btnDel = document.createElement("button")
    btnDel.textContent = "\u00d7"
    btnDel.classList.add("btn--del")
    li.appendChild(btnDel)

    // when clicking the li the "checked" class will be added or removed thanks for the toggle method 
    li.addEventListener("click", () => { 
        li.classList.toggle("checked")
    })

    // when clicking at the btnDel we created the current li will be deleted thanks for the remove() method
    btnDel.addEventListener("click", () => {
        li.remove()
    })

    // removing the text from the input filed after making li element 
    input.value = ""
})

// if you don't know how to use any of these methods just go to MDN the greatest of all time 
