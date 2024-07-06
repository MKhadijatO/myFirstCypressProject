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


Given ('I open ProtoCommerce website', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
}) 

Then ('I filled the form', function(){
    cy.get('').type('')
    cy.get('').type('')
    cy.get('').type('')
    cy.get('').type('')
    cy.get('').type('')
    cy.get('').type('')
})

Then ('I click Submit',)