Feature: Ecommerce

  @Regression @eg
  Scenario: "Placing order"
    Given User Logs into the application with "anshika@gmail.com" and "Iamking@000"
    When User adds "IPHONE 13 PRO" to the cart
    Then User places the order and validates that the order is present in the name of "anshika@gmail.com" and for the product "IPHONE 13 PROo"
