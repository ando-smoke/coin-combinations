var coinCombination = function(cents) {
  var quarters_count = 0;
  var dimes_count = 0;
  var nickels_count = 0;
  var pennies_count = 0;

  quarters_count = Math.floor(cents / 25);
  cents %= 25;

  return [pennies_count, nickels_count, dimes_count, quarters_count];
};
