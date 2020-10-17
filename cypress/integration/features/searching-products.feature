Feature: Searching products

    I want to check if the searching products is working

    Scenario: The system should display only products related to the search
        Given I access the home page
        When I search for products by typing a keyword
        Then the system shows only a product that have the keyword in the title
            And the system shows only 1 product on the page
