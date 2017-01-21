// Initialize variables
var output = "";
var divByThreeAndFive = 'Ping-Pong';
var divByThree = 'ping';
var divByFive = 'pong';

// Business logic
function pingPong(input) {
  for (var i=1; i <= input; i++) {
    if (i % 15 === 0) {
      output += divByThreeAndFive + '<br/>';
    } else if (i % 3 === 0) {
      output += divByThree + '<br/>';
    } else if (i % 5 == 0) {
      output += divByFive + '<br/>';
    } else {
      output += i + '<br/>';
    }
  }
  return output;
}

// User logic
$(function() {
    $('form#inputQuestion').submit(function(e) {
      $('#result').empty();
      var input = parseInt($('input#numberInput').val());
      var answer = pingPong(input);
      if (!input) {
        $('#warning').show();
      } else {
        $('#warning').hide();
        $('#result').append(answer).show();
      }
      e.preventDefault();
    });
});
