
    var player1 = Math.floor(Math.random()*6) + 1 ;
    var player2 = Math.floor(Math.random()*6) + 1 ;

    var imageSource1 = "images/dice"+player1+".png";
    var imageSource2 = "images/dice"+player2+".png";

    document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


    if(player1 == player2)
    document.querySelector("h1").textContent=" Draw! ";
    else
    if(player1 > player2)
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
    else
    document.querySelector("h1").textContent=" Player 2 Wins! 🚩";


