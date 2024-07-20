Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke

@login1 
Scenario:Validate Login with Valid Credentials
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter a valid username
    Then I enter a valid password
    When I Click Login button
    When I validate successful login to my account

@login2    
Scenario: Validate Login process with an invalid username and valid password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an invalid username
    Then I enter a valid password
    When I Click Login button
    Then I validate unsuccessful login to my account - Wrong password

@login3
Scenario: Validate Login process with an valid username and invalid password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter a valid username
    Then I enter an invalid password
    When I Click Login button
    Then I validate unsuccessful login to my account - Wrong password

@login4
Scenario: Validate Login process with an invalid username and invalid password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an invalid username
    Then I enter an invalid password
    When I Click Login button
    Then I validate unsuccessful login to my account - User does not exist

@login5
Scenario: Validate Login process with an empty username and valid password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an empty username
    Then I enter a valid password
    When I Click Login button
    Then I validate unsuccessful login to my account - Please fill out Username and Password

@login6
Scenario: Validate Login process with a valid username and empty password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter a valid username
    Then I enter an empty password
    When I Click Login button
    Then I validate unsuccessful login to my account - Please fill out Username and Password

@login7
Scenario: Validate Login process with an empty username and invalid password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an empty username
    Then I enter an invalid password
    When I Click Login button
    Then I validate unsuccessful login to my account - Please fill out Username and Password

@login8
Scenario: Validate Login process with an invalid username and empty password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an invalid username
    Then I enter an empty password
    When I Click Login button
    Then I validate unsuccessful login to my account - Please fill out Username and Password

@login9
Scenario: Validate Login process with an empty username and empty password
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter an empty username
    Then I enter an empty password
    When I Click Login button
    Then I validate unsuccessful login to my account - Please fill out Username and Password

