describe('main screen', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'characters');
  });

  it('change languages', () => {
    cy.get('[data-cy=add-button]').should('contain.text', 'Add');
    cy.get('#language-button').click();
    cy.get('#chinese-button').click();
    cy.get('[data-cy=add-button]').should('contain.text', '增加');
  });

  it('global filter', () => {
    cy.get('[data-cy=filter-input]').type('jeff');
    cy.get('tbody > tr').should('have.length', 1);
    cy.get('[data-cy=filter-input]').clear().type('22');
    cy.get('tbody > tr').should('have.length', 2);
  });

  it('change columns', () => {
    cy.get('thead > tr > th').should('have.length', 7);
    cy.get('.p-multiselect-trigger').click();
    cy.contains('First Name').click();
    cy.contains('Age').click();
    cy.get('.p-multiselect-trigger').click();
    cy.get('thead > tr > th').should('have.length', 5);
  });
});
