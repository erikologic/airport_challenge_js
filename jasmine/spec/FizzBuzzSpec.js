describe("FizzBuzz", function() {
  var fizz;
  var buzz;

  // beforeEach(function() {
  //   fizzbuzz = new FizzBuzz();
  // });

  it("should return fizz if divisible by 3", function() {
    expect(FizzBuzz(3)).toEqual("fizz");
    expect(FizzBuzz(9)).toEqual("fizz");
  });

  it("should return fizz if divisible by 5", function() {
    expect(FizzBuzz(5)).toEqual("buzz");
    expect(FizzBuzz(10)).toEqual("buzz");
  });

  it("should return fizz if divisible by both 3 and 5", function() {
    expect(FizzBuzz(15)).toEqual("fizzbuzz");
    expect(FizzBuzz(30)).toEqual("fizzbuzz");
  });

  it("should return number if not divisible by 3 or 5", function() {
    expect(FizzBuzz(2)).toEqual(2);
    expect(FizzBuzz(11)).toEqual(11);
  });

});
