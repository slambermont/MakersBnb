describe('Signup', function(){
  beforeEach(function(){
    cy.visit('http://localhost:3000/');
    cy.get('.signup-page').submit()
  })

  it('should display Makers BnB Sign Up', function(){
    cy.contains('Makers BnB Sign Up').should('be.visible')
  })

  it('should return to home page when form submitted', function(){
    cy.get('.signup-form').find('[name="username"]').type('muzzi');
    cy.get('.signup-form').find('[name="email"]').type('test@test.com');
    cy.get('.signup-form').find('[name="password"]').type('password123');
    cy.get('.signup-form').submit()
    cy.contains('muzzi').should('be.visible')
  })

});
