var output;
function pingPong(input) {
  for (var i=1; i <= input; i++) {
    if (i % 3 === 0) {
      document.write('ping<br>');
    } else if (i % 5 === 0) {
      document.write('pong<br>');
    } else {
      document.write(i + '<br>');
    }
  }
}

$(function() {
    $('form#inputQuestion').submit(function(e) {
      var input = parseInt($('input#numberInput').val());
      $('#result').text(pingPong(input));
      e.preventDefault();
    });
});
