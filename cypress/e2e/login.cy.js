describe('Login Page Tests', () => {

  const correctEmail = 'imad@gmail.com';
  const correctPassword = 'imad';

  beforeEach(() => {
    cy.visit("/login");
  });

  it('Should display the login form', () => {
    cy.get('h2').should('contain.text', 'Login');
    cy.get('input#email').should('exist');
    cy.get('input#password').should('exist');
    cy.get('button[type="submit"]').should('exist').and('not.be.disabled');
  });

  it('Should allow login with correct email and password', () => {
    cy.get('input#email').type(correctEmail);
    cy.get('input#password').type(correctPassword);
    cy.get('button[type="submit"]').click();

    cy.url().visit(`/`);
  });

  it('Should disable inputs and button during loading', () => {
    cy.get('input#email').type(correctEmail);
    cy.get('input#password').type(correctPassword);
    cy.get('button[type="submit"]').click();

    cy.get('button[type="submit"]').should('contain.text', 'Loading...').and('be.disabled');
    cy.get('input#email').should('be.disabled');
    cy.get('input#password').should('be.disabled');
  });
});
