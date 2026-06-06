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

  it('should navigate to querying page', () => {
    cy.get('a[href="/commands/querying"]')
    .filter(':visible')
    .first()
    .click();
    cy.url().should('include', '/commands/querying');
    cy.get('h1').should('contain', 'Querying');
  });

  it('should type email into input field', () => {
    cy.get('a[href="/commands/actions"]')
     .filter(':visible')
     .first()
     .click();

     cy.url().should('include', '/commands/actions');

     cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });

  it('should submit form', () => {
    cy.get('a[href="/commands/actions"]')
     .filter(':visible')
     .first()
     .click();
     
    cy.url().should('include', '/commands/actions');
     
    cy.get('.action-form').as('actionForm');
     
    cy.get('@actionForm')
     .find('[type="text"]')
     .type('HALFOFF');

    cy.get('@actionForm')
    .submit();

    cy.get('@actionForm')
     .next()
     .should('contain', 'Your form has been submitted!');
  });
});

