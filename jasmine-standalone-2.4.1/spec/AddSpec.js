describe("AddTest", function() {


  it("Add two Integers", function() {
    var result = add(10,20);
    var expectedResult = 30;
    expect(expectedResult).toEqual(result);

  });

  it("Add two String", function() {
    var result = add("10","20");
    var expectedResult = 30;
    expect(expectedResult).toEqual(result);

  });

  it("Add two Functions", function() {
    var result = add(function(){return 10},function(){return 20});
    var expectedResult = 30;
    expect(expectedResult).toEqual(result);

  });


});
