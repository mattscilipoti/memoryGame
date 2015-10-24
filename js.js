$(document).ready(function() {
  $("td").click(function(event) {
      if (checkCounter() == false) { /*stop from clicking more than two*/
        $(this).css("background", "red")
        // event.preventDefault() /* blue is default*/
      }
      else  if(checkCounter() == true) {
        function startTimer() {
          $("td").toggleClass("cards")
          console.log("startTimer ran")
        }
        setTimeout(startTimer, 1000);

      }
  })
  })


/* click counter start*/
var turnsTaken = 0;

// $(".cards").click(function(event){
//     if (checkCounter()==false) {
//     alert("turn over")
//     }
// });

function checkCounter() {
  if (turnsTaken == 2) {
    return true;
  }
  turnsTaken++;
  return false;
}
/*click counter end*/
