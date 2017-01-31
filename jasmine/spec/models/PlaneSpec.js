describe("User Stories", function() {

  // beforeEach(function() {
  // });

  describe('land', function(){
    it('raises an error if already landed', function(){
      var plane = new Plane();
      var airport = 'airport';

      plane.land(airport)
      expect(function() {plane.land(airport)} ).toThrow('Cannot land plane: plane already landed');
    });
  });
  // describe('', function(){
  //
  // });

});
