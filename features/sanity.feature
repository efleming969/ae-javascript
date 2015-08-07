Feature: Executable scenarios

  In order to verify that my cucumber system is setup correctly
  I want to execute some simple scenarios

@browser
Scenario: browser automation
  Given I'm on the main screen
   Then I should see "hello, world" in the title

