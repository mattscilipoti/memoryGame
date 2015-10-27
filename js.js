var lastCardSelected;
var score = 0;
var boxopened = "";
var imgopened = "";
var num = 0;
var moves = 0;

$(function () {
  $("td").addClass("cardfront")
  // $("td").css("background-size", 0 0)
    // $("td").addClass('hidden');
addColorOrImg();


});

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
/* randomizes the pick for the cards from the array */
function addColorOrImg(){
  var colorOptions = ["violet","grey","red","yellow"]

  var optionUsed = [];
/* splice adds and removes options from the array then puts them back in  */
  $("td").each(function(){
        var randomize =  Math.floor(Math.random() * colorOptions.length);
        $(this).append('<td style = background:' + colorOptions[randomize] + ' id=cardback'+ '/>');
        $("td#cardback").hide();
        // $(this).css("background", colorOptions[randomize]);
        if (optionUsed.indexOf(colorOptions[randomize] ) != -1) colorOptions.splice(randomize, 1);
        else optionUsed.push(colorOptions[randomize] );
        // console.log(colorOptions)
  });

}
// addColorOrImg()

function clickCard(){
  var cardAmount = $("td").length

  $("td").click(function(event){
    moves++
    $(".totalmoves").html(moves);
    // $(this).css("display", "none")
    // $(this).css("background-color", "transparent")
    num++;
    var cardAttr = $("style.selected").attr("style")
    var id2 = $(this).attr("style");
    $(this).addClass("selected") /* need "this" to select indv cells*/
    $(this).removeClass("cardfront")
    var box = $("td").attr("id")
    if ($(this).children().css("display")=="none"){
      $(this).children().css("display", "block")
    } else {$("td").css("display", "block")}
    //  $("td>#cardback").css("display", "block")
      // $("td").css("display") = 'block'


    // var showColor = $("#cardback")
    // $(showColor).show()
          // if (num ==2) {
          //   num = 0
          //
          // }
  })
}
clickCard()

function check(el) {

    if ($(lastSelected).attr("td") == $(el).find("img").attr("td") && $(lastSelected).hasClass("visible")) {
        score = 0 + 2;
        alert("Congradulation! You scored!!" + " " + score + " Points");
    }

    lastSelected = $(el).find("td");
    clearAll();

}


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
