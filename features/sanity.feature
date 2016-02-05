Feature: Executable scenarios

  In order to verify that my cucumber system is setup correctly
  I want to execute some simple scenarios

@e2e
Scenario: browser automation
  Given I'm on the home page
   Then I should see "Welcome Home" in the title

