describe('detail screen', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'characters');
  });

  it('add character', () => {
    cy.get('.p-paginator-left-content').should(
      'contain',
      'There are 11 characters in total'
    );
    cy.get('[data-cy=add-button]').click();
    cy.get('[data-cy=first-name-input]').type('Allan');
    cy.get('[data-cy=last-name-input]').type('Sham');
    cy.get('[data-cy=email-input]').type('allansham@hotmail.com');
    cy.get('[data-cy=submit-button]').should('be.disabled');
    cy.get('[data-cy=age-input]').type('100');
    cy.get('[data-cy=quote-input]').type('Hi Fola');
    cy.get('[data-cy=submit-button]').should('be.enabled');
    cy.get('[data-cy=submit-button]').click();
    cy.get('.p-paginator-last').click(); // go to the last page of the table
    cy.contains('Allan');
    cy.contains('allansham@hotmail.com');
    cy.get('.p-paginator-left-content').should(
      'contain',
      'There are 12 characters in total'
    );
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

  it.only('delete characters', () => {
    cy.get('.p-paginator-left-content').should(
      'contain',
      'There are 11 characters in total'
    );
    cy.get('.p-paginator-last').click(); // go to the last page of the table
    cy.get('tbody > tr').should('have.length', 1);
    cy.get('.p-paginator-first').click(); // go to the first page of the table
    cy.contains('Pierce').click();
    cy.contains('Shirley').click();
    cy.get('[data-cy=delete-button]').click();
    cy.contains('delete the selected 2 character(s)?');
    cy.get('.p-confirm-dialog-accept').click();
    cy.get('tbody > tr').should('have.length', 9);
    cy.get('.p-paginator-left-content').should(
      'contain',
      'There are 9 characters in total'
    );
  });
});
