Feature: Executable scenarios

  In order to verify that my cucumber system is setup correctly
  I want to execute some simple scenarios

Scenario: hello world
  Given A standard greeting module
   When I ask for a message
   Then I should get "hello, world"

@browser
Scenario: browser automation
  Given I'm on the main screen
  Then I should see "WeBowler" in the title
