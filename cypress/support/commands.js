// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('validLogin', (username, password) => {
//     cy.get('#loginusername').type(username)
//     cy.get('#loginpassword').type(password)
//     cy.get("button[onclick='logIn()']").click()
// });

Cypress.Commands.add('navigateToPage', (url) => {
    cy.viewport(1800, 1000);
    cy.visit(url);
});  

Cypress.Commands.add('clicklogin', () => {
    cy.get('#login2').click();
})

Cypress.Commands.add('validusername', (username) => {
    cy.get('#loginusername').type(username);
})

Cypress.Commands.add('validpassword', (password) => {
    cy.get('#loginpassword').type(password);
})

Cypress.Commands.add('selectlogin', () => {
    cy.get("button[onclick='logIn()']").click();
})

// Cypress.Commands.add('validatelogin', () => {
//     cy.get('#nameofuser').should('exist');
// })