context('Index', () => {
  it('Visit main page and verify that the title has loaded (no error)', function () {
    cy.visit('/');

    cy.contains('MedicalTextPlatform').should('be.visible');
  });
  it('Visit main page and verify that the login form is present', function () {
    cy.visit('/');

    cy.contains('Zaloguj się').should('be.visible');
  });
});
