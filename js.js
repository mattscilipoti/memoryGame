$( document ).ready(function() {
  $(".cards").click(function(event){
      if (checkCounter()==false) {
      // alert("turn over")
    $("td").click(function(event){
      $(this).css("background", "red")
      event.preventDefault() /* blue is default*/
    })
  }
});
});

var turnsTaken = 0;

// $(".cards").click(function(event){
//     if (checkCounter()==false) {
//     alert("turn over")
//     }
// });

function checkCounter(){
  if(turnsTaken >= 2){
    return false;
  }
  turnsTaken++;
  return true;
}
