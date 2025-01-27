Feature: Error message Validation
# we will add a tags

  @Negative @Regression
  # For parameterization we use Scenario Outline
  Scenario Outline: Entering the wrong credentials
    Given User Logs into the application2 with "<username>" and "<pwd>"
    Then User should get an error message displayed
    Examples: 
    | username | pwd |
    | admin | admin |
    | anshika@gmail.com | Iamking@000 |
