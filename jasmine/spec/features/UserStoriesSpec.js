describe("User Stories", function() {
  beforeEach(function() {
    // var weatherReporter = new WeatherReporter();
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
  it("so planes land at airports, instruct a plane to land", function() {
    spyOn(plane, 'land');
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

//   // As an air traffic controller
//   // So I can get passengers on the way to their destination
//   // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
//   it("so planes take off from airports, instruct a plane to take off", function() {
//     airport.land(plane);
//     spyOn(plane, 'takeOff');
//     airport.takeOff(plane);
//     expect( plane.takeOff ).toHaveBeenCalled();
//   });
//
//   // As an air traffic controller
//   // To ensure safety
//   // I want to prevent takeoff when weather is stormy
//   it("does not allow planes to take off when stormy", function() {
//     airport.land(plane);
//     spyOn(weatherReporter, "isStormy").and.returnValue(true);
//     expect( airport.takeOff(plane) ).toThrow('Cannot take off plane: weather is stormy');
//   });
//
//   // As an air traffic controller
//   // To ensure safety
//   // I want to prevent landing when weather is stormy
//   it("does not allow planes to land when stormy", function() {
//     spyOn(weatherReporter, "isStormy").and.returnValue(true);
//     expect( airport.land(plane) ).toThrow('Cannot land plane: weather is stormy');
//   });
//
//   // As an air traffic controller
//   // To ensure safety
//   // I want to prevent landing when the airport is full
//   it("does not allow plane to land when airport is full", function() {
//     for (i = 1; i < 20; i++) {
//       airport.land( new Plane() );
//     }
//     expect( airport.land( new Plane() )).toThrow('Cannot land plane: airport full');
//   });
//
//   // As the system designer
//   // So that the software can be used for many different airports
//   // I would like a default airport capacity that can be overridden as appropriate
//   it("airports has a default capacity that can be overridden", function() {
//     capacity = 10;
//     var airport2 = new Airport(capacity);
//     for (i = 1; i < capacity; i++) {
//       airport.land( new Plane() );
//     }
//     expect( airport.land( new Plane() )).toThrow('Cannot land plane: airport full');
//   });
//
});
