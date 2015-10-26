var lastCardSelected;
var score = 0;
var boxopened = "";
var imgopened = "";
var num = 0;
var moves = 0;


// $(function () {
//     $("tr.row td img").addClass('hidden');
//     addImg();
//     click();
//     check();
//     shuffle();
// });

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
/* randomizes the pick for the cards from the array */
function addColorOrImg(){
  var colorOptions = ["red","red","green","green","purple","purple","yellow","yellow"]
  var optionUsed = [];
/* splice adds and removes options from the array then puts them back in  */
  $("td").each(function(){
        var randomize =  Math.floor(Math.random() * colorOptions.length);
        $(this).append('<style background="' + colorOptions[randomize] + '"/>');
        if (optionUsed.indexOf(colorOptions[randomize] ) != -1) colorOptions.splice(randomize, 1);
        else optionUsed.push(colorOptions[randomize] );
        console.log(colorOptions)
  });

}

function clickCard(){
  var cardAmount = $("td").length
  $("td").click(function(){
    moves++

    num++;
    var cardAttr = $("td").attr("style")
    $(this).addClass("selected")
  })
}

clickCard()


function shuffleCards(){

}



// /* pick random color value */
//
// var colorOptions = ["red","red","green","green","purple","purple","yellow","yellow"]
// var getCards = document.querySelector(".cards")
// var getTd = document.querySelector("td")
// var cardsFound = 0
// var clickAmount = 0;
//
// function shuffleCards(){
//   var allCards =
//   var cardThis = $
//   var cardArray = new array();
// }
//
//
//
// for (var i = 0; i< getCards.length; i++)
//   {
//     function colorPicker(){
//       var pickedCard = getCards[i]
//       return randomColor = colorOptions[Math.floor(Math.random()* colorOptions.length)];
//       }
//
//     }
//
//
// function flip(){
// $(".cards").on("click", function() {
//     clickAmount = clickAmount + 1
//     $(this).css("background", colorPicker())
//     var originalColor = $("td").css("background-color")
//  if (clickAmount == 2) {
//   var resetClick = clickAmount = 0
//     setTimeout(function(){
//       $("td").css("background",originalColor),resetClick
//     },1000);
//   }
// });
// } flip()
