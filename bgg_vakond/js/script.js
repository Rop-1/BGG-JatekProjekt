var helyek = [
    { x: 116, y: 96 },
    { x: 377, y: 96 },
    { x: 630, y: 96 },
 
    { x: 116, y: 349 },
    { x: 377, y: 349 },
    { x: 630, y: 349 },
 
    { x: 116, y: 603 },
    { x: 377, y: 603 },
    { x: 630, y: 603 },
]

var sebessegek = [1500, 1000, 500]
 
var vakondInterval
var idoInterval
 
document.querySelector(".btn-warning").addEventListener("click", () => {
    document.querySelector(".leiras").classList.add("d-none")
    document.querySelector("footer").classList.add("d-none")
    document.querySelector(".jatekter").classList.remove("d-none")
 
    inditas()
})
 
function inditas() {
    clearInterval(vakondInterval)
    clearInterval(idoInterval)
 
    Vakond.resetGame()
 
    var ido = 20
    document.querySelector(".ido span").innerHTML = ido
 
    var sebesseg = sebessegek[document.querySelector("select").selectedIndex]

    vakondInterval = setInterval(() => {
        var index = Math.floor(Math.random() * helyek.length)
        new Vakond(helyek[index].x, helyek[index].y, ".gameArea", sebesseg - 100)
    }, sebesseg)

    idoInterval = setInterval(() => {
        ido--
        document.querySelector(".ido span").innerHTML = ido
 
        if (ido <= 0) {
            clearInterval(vakondInterval)
            clearInterval(idoInterval)
            if (Vakond.getScore() >= 10 && sebesseg > 500) {
                alert("Nyertél, jöhet a következő szint!")
            }else if (Vakond.getScore() >= 10) {
                alert("Nyertél, kivitted a játékot")
            }else{
                alert("Próbáld újra!")
            }
            document.querySelector(".ido span").innerHTML = 20
            document.querySelector(".pont span").innerHTML = 0
        }
    }, 1000)
}