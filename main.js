var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")
var a5 = document.getElementById("a5")
var a6 = document.getElementById("a6")
var a7 = document.getElementById("a7")
var a8 = document.getElementById("a8")
var a9 = document.getElementById("a9")
var a10 = document.getElementById("a10")
var count = 0   

putElement = (place) => {
    place.addEventListener("click", function () {
        count++
        if (count % 2 != 0 && place.innerText == "") {
            place.innerHTML = `<h1>X</h1>`
        } else if (count % 2 == 0 && place.innerText == "") {
            place.innerHTML = `<h1>O</h1>`
        }
    })

}
putElement(a1)
putElement(a2)
putElement(a3)
putElement(a4)
putElement(a5)
putElement(a6)
putElement(a7)
putElement(a8)
putElement(a9)
putElement(a10)
