describe('Homepage', function(){
  it('should display Makers BnB', function(){
    cy.visit('http://localhost:3000/');
    cy.title().should('include', 'Makers BnB')
  });
});
