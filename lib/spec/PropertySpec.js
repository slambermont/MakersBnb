describe('Property', function() {
  var property

  beforeEach(function() {
    property = new Property('Flat', '£50/night', 'London', 'salome@makersbnb.com')
  });

  describe('New', function() {
    it('initializes a title', function() {
      expect(property.title).toEqual('Flat')
    });
    it('initializes a price', function() {
      expect(property.price).toEqual('£50/night')
    });
    it('initializes a description', function() {
      expect(property.description).toEqual('London')
    });
    it('initializes a contact', function() {
      expect(property.contact).toEqual('salome@makersbnb.com')
    });
  });
});
