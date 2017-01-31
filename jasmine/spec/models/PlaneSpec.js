describe("User Stories", function() {

  beforeEach(function() {
    plane = new Plane();
    airport = 'airport';
  });

  describe('land', function(){
    it('raises an error if already landed', function(){
      plane.land(airport)
      expect(function() {plane.land(airport)} ).toThrow('Cannot land plane: plane already landed');
    });
  });
  // describe('', function(){
  //
  // });

});
