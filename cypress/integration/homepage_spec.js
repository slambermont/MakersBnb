describe('Homepage', function(){
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });

  it('should display Makers BnB', function(){
    cy.title().should('include', 'Makers BnB')
  });

  // it('should display property form', function(){
  //   cy.get('body').should('contain','input')
  // });
});
