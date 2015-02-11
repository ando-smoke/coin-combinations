describe("coinCombination", function() {
  it("returns the correct combination for 75 cents", function() {
    expect(coinCombination(75)).to.eql([0, 0, 0, 3]);
  });

  it("returns the correct combination for 95 cents", function() {
    expect(coinCombination(95)).to.eql([0, 0, 2, 3]);
  });
});
