document.querySelectorAll(".button").forEach(e=> e.addEventListener('click', addMove))
document.getElementById("reset").addEventListener('click', reset)
//initialize turn
let turn = true;
let t1 = document.getElementById('topLeft').innerText
let t2 = document.getElementById('topMiddle').innerText
let t3 = document.getElementById('topRight').innerText
let m1 = document.getElementById('midLeft').innerText
let m2 = document.getElementById('midMiddle').innerText
let m3 = document.getElementById('midRight').innerText

function addMove(e){
    if(!turn){
        if(document.getElementById(e.srcElement.id).innerText === ""){
             document.getElementById(e.srcElement.id).innerText = "X" 
            turn = true
            //checkWin()
            return
            } else {
                alert("You Can't Move there")
                return
            }

         
    } else {
        if(document.getElementById(e.srcElement.id).innerText === ""){
            document.getElementById(e.srcElement.id).innerText = "O" 
           turn = false
           //checkWin()
           return
           } else {
               alert("You Can't Move there")
               return
           }
    }
}

function reset(){
    document.querySelectorAll(".button").forEach(e=> e.innerText = "")
    turn = true;
}

// function checkWin(){
//     if (){
//         document.getElementById('p1').innerText += 1
//         reset()
//     }
// }


// finish variable assignments
// finish win logic condition
// implement scoring and game reset