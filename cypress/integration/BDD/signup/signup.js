/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data =data
})
});

Given ('I open Demoblaze E-commerce website', function(){
    cy.visit('https://www.demoblaze.com');
    
})

When ('I click on sign up menu', function(){
    cy.get('#signin2').click();
})

Then ('I enter valid username', function(){
    cy.wait(2000);
    cy.get('#sign-username').type(this.data.username);
})

Then ('I enter valid password', function(){
    cy.wait(2000);
    cy.get('#sign-password').type(this.data.password);
})

When ('I click on sign up', function(){
    cy.wait(2000);
    cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
    
})


