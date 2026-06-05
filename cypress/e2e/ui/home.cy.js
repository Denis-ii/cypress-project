describe('Home page', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });
  
  it('should open Cypress example page', () => {
    cy.contains('Kitchen Sink').should('be.visible');
  });

  it('should display main heading', () => {
    cy.get('h1').should('be.visible');
    cy.get('h1').should('contain', 'Kitchen Sink');
  });
  
  it('should have correct URL', () => {
    cy.url().should('include', 'example.cypress.io');
  });

});

