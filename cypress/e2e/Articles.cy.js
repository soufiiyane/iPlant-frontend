describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('should navigate to the correct plant detail page when "En savoir plus" is clicked', () => {
    cy.contains('En savoir plus').should('be.visible');

    cy.contains('En savoir plus').first().click();

    cy.url().should('match', /\/plant\/.+/);
  });

  it('should filter the plants based on the search term', () => {
    const searchTerm = 'Aloe Vera';  
    cy.get('input[type="text"]').type(searchTerm);

    cy.get('.text-xl.font-bold.mb-3').each(($plantName) => {
      cy.wrap($plantName).should('include.text', searchTerm);
    });
  });
});
