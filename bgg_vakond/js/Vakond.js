class Vakond {
    #x
    #y
    #container
    #element
    #timeout
    #megutott = false
    static #score = 0

    constructor(x, y, container, lathatosag) {
        this.setX(x)
        this.setY(y)
        this.setContainer(container)
        this.createObject(lathatosag)
    }

    setX(x) {
        this.#x = x
    }

    setY(y) {
        this.#y = y
    }

    setContainer(container) {
        this.#container = document.querySelector(container)
    }

    createObject(lathatosag) {
        this.#element = document.createElement("div")
        this.#element.classList.add("vakond")
        this.#element.style.left = (this.#x - 50) + "px"
        this.#element.style.top = (this.#y - 50) + "px"

        this.#container.appendChild(this.#element)
        this.#element.addEventListener("click", () => this.collect())

        this.#timeout = setTimeout(() => this.remove(), lathatosag)
    }

    collect() {
        if (this.#megutott) {
            Vakond.#score--
            this.#kiir()
            this.remove()
        } else {
            Vakond.#score++
            this.#kiir()

            this.#megutott = true
            clearTimeout(this.#timeout)
            this.#element.classList.add("vakondMegutott")
            this.#timeout = setTimeout(() => this.remove(), 2000)
        }
    }

    #kiir() {
        document.querySelector(".pont span").innerHTML = Vakond.#score
    }

    remove() {
        clearTimeout(this.#timeout)
        this.#element.remove()
    }

    static getScore() {
        return Vakond.#score
    }

    static resetGame() {
        Vakond.#score = 0
        document.querySelector(".pont span").innerHTML = 0
    }
}