/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data =data
})
    cy.wait(10000)
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
    //also works
    // cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
    // cy.get('button').contains('Log in').click();
    cy.get("button[onclick='logIn()']").click() 
})

When ('I validate successful login to my account', function(){ 
    // cy.wait(3000)
    // cy.get('#nameofuser').should('exist');
    cy.get('#nameofuser').should('contains.text', 'Welcome ' + this.data.username);
    // cy.contains('Welcome khadijat').should('exist')
    // cy.contains('Welcome khadijat').should('be.visible')
})  



// Then ('unsuccessful login message -Please fill out Username and Password.-', function(){
//     cy.on('window:alert', (str) =>
// {
//     expect(str).to.equal('Please fill out Username and Password.')



Then ('I enter an invalid username', function (){
    cy.get('#loginusername').type(this.data.iusername);
})

Then ('I validate unsuccessful login to my account - Wrong password', function(){
    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal('Please fill out Username and Password.')
    // })
    cy.on('window:alert', (t) => {
        expect(t).to.contains('Wrong password.')
    })

})

Then ('I validate unsuccessful login to my account - User does not exist', function(){
    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal('Please fill out Username and Password.')
    // })
    cy.on('window:alert', (t) => {
        expect(t).to.contains('User does not exist.')
    })

})
     
Then ('I validate unsuccessful login to my account - Please fill out Username and Password', function(){
    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal('Please fill out Username and Password.')
    // })
    cy.on('window:alert', (t) => {
        expect(t).to.contains('Please fill out Username and Password.')
    })

})

Then ('I enter an invalid password', function(){
    cy.get('#loginpassword').type(this.data.ipassword);
})

Then ('I enter an empty username', function (){
    cy.get('#loginusername').should("be.empty");
    
})
    
Then ('I enter an empty password', function(){
    cy.get('#loginpassword').should("be.empty");
})