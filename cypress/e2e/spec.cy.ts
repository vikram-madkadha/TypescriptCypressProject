/// reference types = "cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    //cy.title().should('include','type');
    cy.contains('type').click();
  })
})