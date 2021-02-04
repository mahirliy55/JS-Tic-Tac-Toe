var a1 = document.getElementById("block_0")
var a2 = document.getElementById("block_1")
var a3 = document.getElementById("block_2")
var a4 = document.getElementById("block_3")
var a5 = document.getElementById("block_4")
var a6 = document.getElementById("block_5")
var a7 = document.getElementById("block_6")
var a8 = document.getElementById("block_7")
var a9 = document.getElementById("block_8")
var winner = document.getElementById("winner")
var xWins = document.getElementById("xWins")
var oWins = document.getElementById("oWins")
var tie = document.getElementById("tie")
var xw = 0
var ow = 0
var ti = 0
var count = 0

var list = [a1, a2, a3]
var list1 = [a4, a5, a6]
var list2 = [a7, a8, a9]
var list3 = [a1, a5, a9]
var list4 = [a1, a4, a7]
var list5 = [a3, a5, a7]
var list6 = [a3, a6, a9]
var list7 = [a2, a5, a8]

putElement = (place) => {
    place.addEventListener("click", function () {
        count++
        if (count % 2 != 0 && place.innerText == "") {
            place.innerHTML = "X"
        } else if (count % 2 == 0 && place.innerText == "") {
            place.innerHTML = "O"
        }

        findWinner(list)
        findWinner(list1)
        findWinner(list2)
        findWinner(list3)
        findWinner(list4)
        findWinner(list5)
        findWinner(list6)
        findWinner(list7)
    })

}

findWinner = (arr) => {
    if (arr[0].innerText == "X" && arr[1].innerText == "X" && arr[2].innerText == "X") {
        xw++
        winner.innerText = "X Win !!!"
        a1.innerHTML = ""
        a2.innerHTML = ""
        a3.innerHTML = ""
        a4.innerHTML = ""
        a5.innerHTML = ""
        a6.innerHTML = ""
        a7.innerHTML = ""
        a8.innerHTML = ""
        a9.innerHTML = ""
    } else if (arr[0].innerText == "O" && arr[1].innerText == "O" && arr[2].innerText == "O") {
        ow++
        winner.innerText = "O Win !!!"
        a1.innerHTML = ""
        a2.innerHTML = ""
        a3.innerHTML = ""
        a4.innerHTML = ""
        a5.innerHTML = ""
        a6.innerHTML = ""
        a7.innerHTML = ""
        a8.innerHTML = ""
        a9.innerHTML = ""
    } else if (a1.innerText != "" && a2.innerText != "" && a3.innerText != "" && a4.innerText != "" && a5.innerText != "" && a6.innerText != "" && a7.innerText != "" && a8.innerText != "" && a9.innerText != "") {
        ti++
        winner.innerText = "Tie !!!"
        a1.innerHTML = ""
        a2.innerHTML = ""
        a3.innerHTML = ""
        a4.innerHTML = ""
        a5.innerHTML = ""
        a6.innerHTML = ""
        a7.innerHTML = ""
        a8.innerHTML = ""
        a9.innerHTML = ""
    }
    xWins.innerText = `X-Wins: ${xw}`
    oWins.innerText = `O-Wins: ${ow}`
    tie.innerText = `Tie: ${ti}`
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




