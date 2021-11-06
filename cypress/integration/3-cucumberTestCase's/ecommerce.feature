Feature: End to End Ecommerce validation

    @regression
    Scenario: Ecommerce products delivery
        Given i open ecommerce page
        When i add items to cart
        And validate the total price of the items added to cart
        When i checkout products
        Then select the country submit and verify Success message

    @smoke
    Scenario: Filling the form to shop
        Given i open ecommerce page
        When i fill the form details
            | name | gender |
            | Bob  | Male   |
        Then validate the forms behaviour
            | minlength |
            | 2         |
        And select the shop page