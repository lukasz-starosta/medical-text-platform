context('Przegladaj', () => {
  it('Verify that user can search (no error)', function () {
    cy.visit('/przegladaj');

    cy.get('input[placeholder="Wpisz frazę lub słowa kluczowe"]').should('be.visible');
  });
  it('Verify that loader is shown when search is running', function () {
    cy.visit('/przegladaj');

    cy.get('input[placeholder="Wpisz frazę lub słowa kluczowe"]').type('a');
    cy.get('[aria-label="search"]').click();

    cy.get('.ant-spin').should('be.visible');
  });
});
