class Vakond{
    #x
    #y
    #container
    #speed
    #element
    #lathatoInterval
    #helyek = [
        {x: 116, y:96},
        {x: 377, y: 96},
        {x: 630, y: 96},

        {x: 116, y:349},
        {x: 377, y:349},
        {x: 630, y:349},

        {x: 116, y:603},
        {x: 377, y:603},
        {x: 630, y:603},
    ]
    static index
    static #score = 0


    constructor(x, y, speed, container){
        this.setHely(hely)
        this.setSpeed(speed)
        this.setContainer(container)
        this.createObject()
    }

    poz(){
        index = Math.floor(Math.random() * 9);
    }

    setX(index){
        this.#x = this.#helyek[index[0]]
    }
    setY(index){
        this.#y = this.#helyek[index[1]]
    }

    setSpeed(speed){
        this.#speed = speed
    }

    setContainer(container){
        this.#container = document.querySelector(container)
    }

    createObject(){
        this.#element = document.createElement("div")
        this.#element.style.left = this.#x + "px"
        this.#element.style.top = this.#y + "px"

        this.#container.appendChild(this.#element)
        this.#element.addEventListener('click', ()=> this.collect())
    }

    collect(){
        Vakond.#score++
        this.remove()
    }

    remove(){
        this.#element.remove()
        clearInterval(this.#lathatoInterval)
    }

    static getScore(){
        return Vakond.#score
    }

    static resetGame(){
        Vakond.#score = 0
    }


}