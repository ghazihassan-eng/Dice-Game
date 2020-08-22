
//for dice1
var randomNumber1 = Math.floor((Math.random() * 6)+1);

var randomImage1 = "images/"+"dice"+ randomNumber1 +".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);

//for dice 2
var randomNumber2 = Math.floor((Math.random() * 6)+1);

var randomImage2 = "images/"+"dice"+ randomNumber2 +".png";


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);


//final result
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h3").innerHTML = "PLAYER 1 WIN";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h3").innerHTML = "PLAYER 2 WIN";

}
else 
{
  document.querySelector("h3").innerHTML = "MATCH TIE";

}
