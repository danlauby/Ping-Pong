$(function() {
    $('form#inputQuestion').submit(function(e) {
      var input = parseInt($('input#numberInput').val());
      $('#result').text(input);
      e.preventDefault();
    });
});
