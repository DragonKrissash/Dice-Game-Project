var p1=Math.floor(Math.random()*5+1);
var p2=Math.floor(Math.random()*5+1);
if(p1>p2)
document.querySelector("h1").textContent="Player 1 wins!";
else if(p2>p1)
document.querySelector("h1").textContent="Player 2 wins!";
else
document.querySelector("h1").textContent="It's a tie!";

switch(p1){
    case 1:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".dice1 img").setAttribute("src","./images/dice6.png");
        break;
    }

    switch(p2){
        case 1:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice1.png");
            break;
        case 2:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice2.png");
            break;
        case 3:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice3.png");
            break;
        case 4:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice4.png");
            break;
        case 5:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice5.png");
            break;
        case 6:
            document.querySelector(".dice2 img").setAttribute("src","./images/dice6.png");
            break;
        }
function reload(){
    location.reload(true);
}