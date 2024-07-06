Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke

Scenario:Validate Signup Process with Valid Credentials
    Given I open Demoblaze E-commerce website
    When I click on sign up menu
    Then I enter valid username
    Then I enter valid password
    When I click on sign up
    