Feature: Send a contact

    I want to send a message, using the contact page

    Scenario: The system should show a successful message
        Given I access the home page
            And I click to access the contact page
        When I send a message with a document
        Then the system shows feedback that the message was sent
