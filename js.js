
var score = 0;
var num = 0;
var moves = 0;

$(function () {
  $("td").addClass("cardfront")
addColorOrImg();
});

// function randomFromTo(from, to) {
//   return Math.floor(Math.random() * (to - from + 1) + from);
// }
/* randomizes the pick for the cards from the array */
function addColorOrImg(){
  var colorOptions = ["violet","grey","red","yellow"]

  var optionUsed = [];
/* splice adds and removes options from the array then puts them back in  */
  $("td").each(function(){
        var randomize =  Math.floor(Math.random() * colorOptions.length);
        $(this).append('<td style = background:' + colorOptions[randomize] + ' id=cardback'+ '/>');
        $("td#cardback").hide();
        if (optionUsed.indexOf(colorOptions[randomize] ) != -1) colorOptions.splice(randomize, 1);
        else optionUsed.push(colorOptions[randomize] );
  });

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
        //  score--;
        //    $(".numberbox").html("score:"+ ' '+score )
         //
        //    /* let them know they kinda suck*/
        //    if (score == -3){
        //         alert("Seriously tho? try a little harder :-(")
        //       }
         setTimeout(function(){
          $("td.selected").addClass("cardfront"),$("td").removeClass("selected")
          ,$("td").children().css("display", "none")
        },500)
      }/*flip end*/

      /*check if there is a match and remove if true*/
      else if (card1==card2){
          // score++;
          // $(".numberbox").html("score:"+ ' '+score )
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
  function changeScore(){
   if (card1==card2){
        score++;
        $(".numberbox").html("score:"+ ' '+score )
  }
    if(card1 !== card2){
        score--;
        $(".numberbox").html("score:"+ ' '+score )
}
    /* let them know they kinda suck*/
    if (score == -3){
         alert("Seriously tho? try a little harder :-(")
       }
     }

}
// changeScore()
takeScore()
