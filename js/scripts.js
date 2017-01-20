$(function() {
  $('form#inputQuestion').submit(function(e) {
    var numberInput = parseInt($('input#numberInput').val());
    $('#result').test(pingPong(number));
    e.preventDefault();
  });
});
