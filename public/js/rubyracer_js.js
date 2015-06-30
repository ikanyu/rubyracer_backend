// $(document).ready(function() {
//   $('button#button1').click(function(){
//     $('tr:first > td.active').removeClass('active').next().addClass('active')
//   });
// });

$(document).ready(function() {
  var position1 = 0, position2 = 0, status = false, start;

    function restart() {
      position1 = 1;
      position2 = 1;
      $("#player1_strip > td.active").removeClass('active');
      $("#player1_strip > td").first().addClass('active');
      $("#player2_strip > td.active").removeClass('active');
      $("#player2_strip > td").first().addClass('active');
      document.querySelector('.results1').innerHTML = "Player 1 current position: " + position1;
      document.querySelector('.results2').innerHTML = "Player 2 current position: " + position2;
    }

  $('button#button1').click(function(){
    // restart();
    location.reload();
    });

  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how

    var message = "Finished";



    function update_player_position(person, position) {
      if (person == 'player1'){
        $("#player1_strip > td.active").removeClass('active').next().addClass('active');
      }
      else {
        $("#player2_strip > td.active").removeClass('active').next().addClass('active');
      }
      position = position + 1;
      return position;
    }

    function startgame(){
      status = true;
      start = new Date().getTime();
      // alert(status);
    }

    function endgame(){
      status = false;
      var end = new Date().getTime();
      var timetaken = end - start;
      document.querySelector('.timestart').innerHTML = start;
      document.querySelector('.timeend').innerHTML = end;
      document.querySelector('.timetaken').innerHTML = timetaken/1000;
      $.ajax({
        type: "get",
        url:'/games/1/edit', //Defined in your routes file
        data: (
        'winner=1' )
      });
    }

    function checkcomplete(){
    if (position1 == 10) {
      document.querySelector('.results1').innerHTML = "Player 1 current position: " + position1;
      document.querySelector('.finalresults').innerHTML = "Player 1 has won!";
      endgame();
      // position1 = 11;
    }
    else if (position2 == 10) {
      document.querySelector('.results2').innerHTML = "Player 2 current position: " + position2;
      document.querySelector('.finalresults').innerHTML = "Player 2 has won!";
      endgame();
      // position2 = 11;
    }
    }

    var code = event.keyCode || event.which;
    if (code == 13) {
      // alert("gamestart");
      startgame();
    }
    if (status === true){
      // alert("true status");

    if(code == 81) {
      // alert("player1");
      position1 = update_player_position('player1', position1);

      document.querySelector('.results1').innerHTML = "Player 1 current position: " + position1;
      checkcomplete();
    } else if(code == 80) {
      position2 = update_player_position('player2', position2);

      document.querySelector('.results2').innerHTML = "Player 2 current position : " + position2;
      checkcomplete();
    }
    else {

    }
  }
  });

});

