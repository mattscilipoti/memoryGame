
var score = 0;
var num = 0;
var moves = 0;

$(function () {
  $("td").addClass("cardfront"); // mms: this adds the class "cardFront" to all existing 'td's.
  // mms: it would be nice to pass something to addCard, to associate the back with the front
  addCard();
});

// mms: recommend extracting functions for various functionality.
// mms: See how this clarifies `addColor` (renamed to addCard)
// mms: AddColor*Or*Img?

// /* randomizes the pick for the cards from the array */
// function addColorOrImg(){
//   var colorOptions = ["violet","grey","red","yellow"]
//
//   var optionUsed = [];
//   /* splice adds and removes options from the array then puts them back in  */
//   $("td").each(function(){
//     var randomize =  Math.floor(Math.random() * colorOptions.length);
//     $(this).append('<td style = background:' + colorOptions[randomize] + ' id=cardback'+ '/>');
//     $("td#cardback").hide();
//     if (optionUsed.indexOf(colorOptions[randomize] ) != -1) colorOptions.splice(randomize, 1);
//     else optionUsed.push(colorOptions[randomize] );
//   });
//
// }

var usedColors = [];
$("td").each(function(index, cardContainer){
  addCard(cardContainer);
});

function addCard(cardContainer){
  randomColor = randomUnusedColor(usedColors);
  usedColors.push(randomColor); // save to ensure no duplicates
  // add card with the selected random color
  // mms: how does every cardback have the same id?
  var newCardBack = $('<td style = background:' + randomColor + ' id=cardback'+ '/>');
  $(cardContainer).append(newCardBack);
  // Hide the new cardback
  newCardBack.hide();
}

// mms: all the randomization complexity hides in randomUnusedColor
// mms: which we can replace with any helpful library and not change addCard.
function randomUnusedColor(usedColors){
  var colorOptions = ["violet","grey","red","yellow"];
  // subtract used from original
  availableColors = colorOptions.filter( function( color ) {
    return usedColors.indexOf( color ) < 0;
  });

  var randomize =  Math.floor(Math.random() * availableColors.length);
  return availableColors[randomize];
}


function clickCard(){
  // var cardAmount = $("td").length

  $("td").click(function(event){
    moves++
    $(".totalmoves").html(moves);

    num++;
    var card1 = $("td.selected").children().css("background-color")
    var card2 = $(this).children().css("background-color")
    var click1 = $("td.selected").children()
    var click2 = $(this).children()

    $(this).addClass("selected") /* need "this" to select indv cells*/
    $(this).removeClass("cardfront")
    var box = $("td").attr("id")
    if ($(this).children().css("display")=="none"){
      $(this).children().css("display", "block")
    }

    if (num ==2) {
      num = 0

      /*flips card after 1 second*/
      if(card1 !== card2) {
        score--;
        $(".numberbox").html("score:"+ ' '+score )

        /* let them know they kinda suck*/
        if (score == -3){
          alert("Seriously tho? try a little harder :-(")
        }
        setTimeout(function(){
          $("td.selected").addClass("cardfront"),$("td").removeClass("selected")
          ,$("td").children().css("display", "none")
        },500)
      }/*flip end*/

      /*check if there is a match and remove if true*/
      else if (card1==card2){
        score++;
        $(".numberbox").html("score:"+ ' '+score )
        alert("you found a match!")
        $("td.selected").remove()
        $("td.selected").children().remove()
        $(this).children().remove()
        $(this).remove()
        check() /*if no cards are left*/
      }

    }/* if stmnt end*/

  })
}
clickCard()

/* check if any cards are left*/
function check() {
  if ($("td.cardfront").length==0){
    alert("you won!")
  }
}

/*show score on click and track it*/
function takeScore() {
  $("#button2").click(function(){
    $(".numberbox").html("score:"+ ' '+score )

  })

  /* track the score*/
  // function changeScore(){
  //  if (card1==card2){
  //       score++;
  //       $(".numberbox").html("score:"+ ' '+score )
  //     }
  //   if(card1 !== card2){
  //       score--;
  //       $(".numberbox").html("score:"+ ' '+score )
  //     }
  //   /* let them know they kinda suck*/
  //   if (score == -3){
  //        alert("Seriously tho? try a little harder :-(")
  //      }
  //    }

}
// changeScore()
takeScore()
