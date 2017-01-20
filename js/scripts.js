var output;
function pingPong(input) {
  for (var i=1; i <= input; i++)
  {
    document.write(i + "<br>");
  }

}

$(function() {
    $('form#inputQuestion').submit(function(e) {
      var input = parseInt($('input#numberInput').val());
      $('#result').text(pingPong(input));
      e.preventDefault();
    });
});
