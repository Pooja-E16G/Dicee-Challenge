var randomNumer1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumer1 + ".png";
var randomImageSource ="Images/" + randomDiceImage;

 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImageSource);



//  for player2
 var randomNumer2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumer2 + ".png";
var randomImageSource2 ="Images/" + randomDiceImage2;

 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomImageSource2);


 if (randomNumer1>randomNumer2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
 }
 else if (randomNumer2>randomNumer1){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
 } else {
    document.querySelector("h1").innerHTML= "Draw!";
 }