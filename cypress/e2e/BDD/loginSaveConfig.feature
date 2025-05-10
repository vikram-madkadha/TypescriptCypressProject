Feature: End to end testing for save Integration Config
  As a user
  I want to save the integration configuration
  So that I can use it later

 

    Scenario Outline: Save Integration Config
    Given I am on the login page
    When I enter username and password and click the login button 
    | UserName                    |  Password     |
    | vikram.mishra+super@vts.com |  Password@123 |
    Then I should be redirected to the dashboard page
    When I navigate to the integration configuration page
    And I fill in the configuration form with valid data
    And I click the save button
    Then I should see a success message indicating that the configuration has been saved
    Then I should be logged out
          