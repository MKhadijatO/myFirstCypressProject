/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data =data
})
    cy.intercept('https://www.demoblaze.com/viewcart').as('Cartlist');
});

Given ('I open Demoblaze E-commerce website', function(){
    cy.visit('https://www.demoblaze.com');
})

When ('I click The Login button', function(){
    cy.get('#login2').click();
})

Then ('I enter a valid username', function(){
    cy.wait(2000);
    cy.get('#loginusername').type(this.data.username);
})

When ('I enter a valid password', function(){
    cy.wait(2000);
    cy.get('#loginpassword').type(this.data.password);
})

Then ('I Click Login button', function(){
    cy.get("button[onclick='logIn()']").click() 
})

When ('I validate successful login to my account', function(){ 
    cy.get('#nameofuser').should('contains.text', 'Welcome ' + this.data.username);
})

Then ('I clck the Cart Button' , function(){
    cy.get('a').contains('Cart').click()
})

Then ('I validated list of items in Cart using intercept', function(){
    // cy.wait('@Cartlist', { timeout: 10000 });
    cy.get('button').contains('Place Order').click();
})