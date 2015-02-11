var coinCombination = function(cents) {
  var quarters_count = 0;
  var dimes_count = 0;
  var nickels_count = 0;
  var pennies_count = 0;

  quarters_count = Math.floor(cents / 25);
  cents %= 25;

  dimes_count = Math.floor(cents / 10);
  cents %= 10;

  nickels_count = Math.floor(cents / 5);
  cents %= 5;

  pennies_count = cents;

  return [pennies_count, nickels_count, dimes_count, quarters_count];
};

$(document).ready(function() {
  $("form#coin_combo").submit(function(event) {
    var cents = parseInt($("input#cents").val());
    var coinCombo = coinCombination(cents)

    $(".quarters-count").text(coinCombo[3]);
    $(".dimes-count").text(coinCombo[2]);
    $(".nickels-count").text(coinCombo[1]);
    $(".pennies-count").text(coinCombo[0]);

    $("#result").show();
    event.preventDefault();
  });
});
