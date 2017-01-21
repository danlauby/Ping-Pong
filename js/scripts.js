var output = "";
var divByThreeAndFive = 'Ping-Pong';
var divByThree = 'ping';
var divByFive = 'pong';

function pingPong(input) {
  for (var i=0; i <= input; i++) {
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

$(function() {
    $('form#inputQuestion').submit(function(e) {
      var input = parseInt($('input#numberInput').val());
      if (!input) {
        // $('#result').hide();
        $('#warning').show();
      } else {
        $('#warning').hide();
        $('#result').append(pingPong(input)).show();
      }
      e.preventDefault();
    });
});
