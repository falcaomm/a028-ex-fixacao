function adicionaItem(event) {
    let novoItem = document.createElement("article")
    let container = document.getElementById("container")

    let conteudoNovoItem = document.createTextNode("sou um novo item")

    novoItem.appendChild(conteudoNovoItem)

    novoItem.classList.add("item")

    novoItem.setAttribute("onclick", "removeItem(event)")
    container.insertAdjacentElement("beforeend", novoItem)

    event.preventDefault()
}


function removeItem(event) {
    event.target.remove()

    event.preventDefault()
}