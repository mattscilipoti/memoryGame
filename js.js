// $(".cards").click(function() {
// if (clickAmount < 2) {
//   $(".cards").css("background", "red")
//         console.log("red ran")
// event.preventDefault() /* blue is default*/
//  }
//       else if(checkCounter ==2) {
//         function startTimer() {
//           $(".cards").css("background","blue")
//           console.log("startTimer ran")
//   console.log(clickAmount)
//         }setTimeout(startTimer, 1000);
//
//       }
//
// })

var clickAmount = 0;
function flip(){
$(".cards").on("click", function() {
  clickAmount = clickAmount + 1
  $(this).css("background", "red")
  if (clickAmount == 2) {
    function startTimer() {
      $(".cards").css("background", "blue")
      clickAmount = 0
    }
    clearTimeout(startTimer)
    setTimeout(startTimer, 1000);

  }
  console.log(clickAmount)

});
} flip()










// function checkCounter() {
// $(".cards").click(function(){
//   if (clickAmount == 2) {
//        return true;
//
//     } else {
//       return false;
//
//     }
//    console.log(clickAmount)
// })
// }

// function checkCounter() {
//   if (turnsAllowed == 2) {
//     return true;
//   }
//   turnsAllowed++;
//   console.log(turnsAllowed)
//   return false;
// }
/*click counter end*/
