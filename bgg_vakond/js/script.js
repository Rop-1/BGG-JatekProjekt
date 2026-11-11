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
 
