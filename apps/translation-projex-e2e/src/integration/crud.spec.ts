describe('detail screen', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'characters');
  });

  it('add character', () => {
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=first-name-input]').type('Allan');
    cy.get('[data-cy=last-name-input]').type('Sham');
    cy.get('[data-cy=email-input]').type('allansham@hotmail.com');
    cy.get('[data-cy=submit-button]').should('be.disabled');
    cy.get('[data-cy=age-input]').type('100');
    cy.get('[data-cy=quote-input]').type('Hi Fola');
    cy.get('[data-cy=submit-button]').should('be.enabled');
    cy.get('[data-cy=submit-button]').click();
    cy.contains('Allan');
    cy.contains('allansham@hotmail.com');
    // cy.get('[data-cy=reset-button]');
  });

  it('edit character', () => {
    cy.contains('Troy').click();
    cy.get('[data-cy=edit-button]').click();
    cy.get('[data-cy=first-name-input]').should('have.value', 'Troy');
    cy.get('[data-cy=email-input]').should(
      'have.value',
      'childish@gambino.com'
    );
    cy.get('[data-cy=first-name-input]').clear().type('Troy Donald Glover');
    cy.get('[data-cy=submit-button]').click();
    cy.contains('Troy Donald Glover');
  });

  it('delete characters', () => {
    cy.get('tbody > tr').should('have.length', 7);
    cy.contains('Pierce').click();
    cy.contains('Shirley').click();
    cy.get('[data-cy=delete-button]').click();
    cy.contains('delete the selected 2 character(s)?');
    cy.get('.p-confirm-dialog-accept').click();
    cy.get('tbody > tr').should('have.length', 5);
  });
});
