Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke

Scenario:Validate Login with Valid Credentials
    Given I open Demoblaze E-commerce website
    When I click The Login button
    Then I enter a valid username
    Then I enter a valid password 
    When I Click Login button
    When I validate successful login to my account
