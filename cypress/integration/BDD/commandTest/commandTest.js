/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data
})
});


Given ('I open Demoblaze E-commerce website', function(){
    // cy.visit('https://www.demoblaze.com');
    cy.navigateToPage('https://www.demoblaze.com');
})

When ('I click The Login button', function(){
    // cy.get('#login2').click();
    cy.clicklogin();
})

Then ('I enter a valid username', function(){
    cy.wait(2000);
    // cy.get('#loginusername').type(this.data.username);
    cy.validusername(this.data.username);
})

Then ('I enter a valid password', function(){
    cy.wait(2000);
    // cy.get('#loginpassword').type(this.data.password);
    cy.validpassword(this.data.password);
})

When ('I Click Login button', function(){
    // cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
    // cy.get('button').contains('Log in').click();
    // cy.get("button[onclick='logIn()']").click() 
    cy.selectlogin();
})

When ('I validate successful login to my account', function(){ 
    // cy.get('#nameofuser').should('exist');
    cy.get('#nameofuser').should('contains.text', 'Welcome ' + this.data.username);
    // cy.contains('Welcome khadijat').should('exist')
    // cy.contains('Welcome khadijat').should('be.visible')
    // cy.validatelogin();
})  
