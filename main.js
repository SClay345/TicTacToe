document.querySelectorAll(".button").forEach(e=> e.addEventListener('click', addMove))
document.querySelectorAll(".button").forEach(e=> e.addEventListener('click', checkTurn))
document.getElementById("reset").addEventListener('click', reset)
document.getElementById("resetScore").addEventListener('click', resetScore)
//initialize turn
let turn = true;
let t1 = document.getElementById('topLeft').innerText
let t2 = document.getElementById('topMiddle').innerText
let t3 = document.getElementById('topRight').innerText
let m1 = document.getElementById('midLeft').innerText
let m2 = document.getElementById('midMiddle').innerText
let m3 = document.getElementById('midRight').innerText
let b1 = document.getElementById('bottomLeft').innerText
let b2 = document.getElementById('bottomMiddle').innerText
let b3 = document.getElementById('bottomRight').innerText


//Player Scores
let p1Score = 0
let p2Score = 0


function checkTurn(){
    if(turn){
        document.getElementById('turn').innerText = 'O'
    } else {
        document.getElementById('turn').innerText = 'X'
    }
}
function addMove(e){
    if(!turn){
        if(document.getElementById(e.srcElement.id).innerText === ""){
             document.getElementById(e.srcElement.id).innerText = "X" 
             if(e.srcElement.id === 'topLeft'){
                 t1 = document.getElementById(e.srcElement.id).innerText
             } else if(e.srcElement.id === 'topMiddle'){
                 t2 = document.getElementById(e.srcElement.id).innerText
             } else if(e.srcElement.id === 'topRight'){
                 t3 = document.getElementById(e.srcElement.id).innerText
             }else if(e.srcElement.id === 'midLeft'){
                m1 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'midMiddle'){
                m2 = document.getElementById(e.srcElement.id).innerText
            }else if(e.srcElement.id === 'midRight'){
                m3 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'bottomLeft'){
                b1 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'bottomMiddle'){
                b2 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'bottomRight'){
                b3 = document.getElementById(e.srcElement.id).innerText
            }
            turn = true


            checkWin()
            return
            } else {
                alert("You Can't Move there")
                return
            }

         
    } else {
        if(document.getElementById(e.srcElement.id).innerText === ""){
            document.getElementById(e.srcElement.id).innerText = "O" 
            if(e.srcElement.id === 'topLeft'){
                t1 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'topMiddle'){
                t2 = document.getElementById(e.srcElement.id).innerText
            } else if(e.srcElement.id === 'topRight'){
                t3 = document.getElementById(e.srcElement.id).innerText
            }else if(e.srcElement.id === 'midLeft'){
               m1 = document.getElementById(e.srcElement.id).innerText
           } else if(e.srcElement.id === 'midMiddle'){
               m2 = document.getElementById(e.srcElement.id).innerText
           }else if(e.srcElement.id === 'midRight'){
               m3 = document.getElementById(e.srcElement.id).innerText
           } else if(e.srcElement.id === 'bottomLeft'){
               b1 = document.getElementById(e.srcElement.id).innerText
           } else if(e.srcElement.id === 'bottomMiddle'){
               b2 = document.getElementById(e.srcElement.id).innerText
           } else if(e.srcElement.id === 'bottomRight'){
               b3 = document.getElementById(e.srcElement.id).innerText
           }
           turn = false
           checkWin()
           return
           } else {
               alert("You Can't Move there")
               return
           }
    }
}

function reset(){
    document.querySelectorAll(".button").forEach(e=> e.innerText = "")
     t1 = ""
     t2 = ""
     t3 =""
     m1 = ""
     m2 = ""
     m3 = ""
     b1 = ""
     b2 = ""
     b3 = ""
    turn = true;
    checkTurn()
    document.querySelector('h2').innerText = ''
}

function checkWin(){
    if ((t1 === 'O' && t2 === 'O' && t3 === 'O')||   // top row 
        t1 === 'O' && m2 === 'O' && b3 === 'O'||   // top diagonal win
        t1 === 'O' && m1 === 'O' && b1 ==='O' ||   // Topleft down win
        m1 === 'O' && m2 === 'O' && m3 === 'O'||   // middle straight win
        b1 === 'O' && b2 === 'O' && b3 === 'O'||   //bottom straight win
        b1 === 'O' && m2 === 'O' && t3 === 'O'||   //bottom diagonal win
        t2 === 'O' && m2 === 'O' && b2 === 'O'||   //middle vertical win
        t3 === 'O' && m3 === 'O' && b3 === 'O'     // last row vertical win
        ){
            
            document.querySelector('h2').innerText = 'Player One Wins!'
            p1Score++
            document.getElementById('p1').innerText = p1Score
            
    } else if(t1 === 'X' && t2 === 'X' && t3 === 'X'||   // top row 
    t1 === 'X' && m2 === 'X' && b3 === 'X'||   // top diagonal win
    t1 === 'X' && m1 === 'X' && b1 ==='X' ||   // Topleft down win
    m1 === 'X' && m2 === 'X' && m3 === 'X'||   // middle straight win
    b1 === 'X' && b2 === 'X' && b3 === 'X'||   //bottom straight win
    b1 === 'X' && m2 === 'X' && t3 === 'X'||   //bottom diagonal win
    t2 === 'X' && m2 === 'X' && b2 === 'X'||   //middle vertical win
    t3 === 'X' && m3 === 'X' && b3 === 'X'     // last row vertical win
        ){
            document.querySelector('h2').innerText = 'Player Two Wins!'
            p2Score++
            document.getElementById('p2').innerText = p2Score
            
    } else if( t1 && t2 && t3 && m1 && m2 && m3 && b1 && b2 && b3 !== ""){
        document.querySelector('h2').innerText = 'Draw! Reset and go again!'
        
    }
}


function resetScore(){
    p1Score = 0
    p2Score = 0
    document.getElementById('p1').innerText = p1Score
    document.getElementById('p2').innerText = p2Score
}

// finish variable assignments    --- DONE
// finish win logic condition  -- done(messy but works)
// implement scoring and game reset  -- done