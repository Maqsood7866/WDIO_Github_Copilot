Feature: Player Registration


  @positive
  Scenario: Successful Player Registration
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example.com |
      | Phone Number | 1234567890 |
      | Address      | 123 Main St |
      | Zip Code     | 12345      |
    And I enter date of birth as "1990-01-01"
    And I select gender as "Male"
    And I select my age range from the dropdown as "26 - 50"
    And I set my weight by dragging and set it to "75"
    And I click on the sports and select 2 values as "Football" and "Basketball"
    And I click on upload photo and select an image from path "C:\\Users\\maqsood.a.ali\\Downloads\\Image 6Copy.jpg"
    And I click on the checkbox for Terms and Conditions
    And I submit the registration form
    Then I should see a confirmation message "Registration Successfull !"

  @Negative1
  Scenario: Submit the form with all required fields missing
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I submit the registration form
    Then I should see a validation error message "Firstname is required."
    And I should see a validation error message "Lastname is required."
    And I should see a validation error message "Date of Birth is required."
    And I should see a validation error message "Phone number is required."
    And I should see a validation error message "Email is required."
    And I should see a validation error message "This field is required."
    And I should see a validation error message "This field is required."
    And I should see a validation error message "Address is required."
    And I should see a validation error message "Zipcode is required."

  @Negative2
  Scenario: Submit the form with an invalid email format
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example |
      | Phone Number | 1234567890 |
      | Address      | 123 Main St |
      | Zip Code     | 12345      |
    And I submit the registration form
    Then I should see a validation error message "This field is required."

  @Negative3
  Scenario: Submit the form with an invalid phone number
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example.com |
      | Phone Number | abcd   |
      | Address      | 123 Main St |
      | Zip Code     | 12345      |
    And I submit the registration form
    Then I should see a validation error message "Phone number is required."

  @Negative4
  Scenario: Submit the form with an invalid zip code
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example.com |
      | Phone Number | 1234567890 |
      | Address      | 123 Main St |
      | Zip Code     | abcdwe       |
    And I submit the registration form
    Then I should see a validation error message "Zipcode is required."

  @Negative5
  Scenario: Submit the form without selecting sports
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example.com |
      | Phone Number | 1234567890 |
      | Address      | 123 Main St |
      | Zip Code     | 12345      |
    And I enter date of birth as "1990-01-01"
    And I select gender as "Male"
    And I select my age range from the dropdown as "26 - 50"
    And I set my weight by dragging and set it to "75"
    And I submit the registration form
    Then I should see a validation error message "This field is required."

  @Negative6
  Scenario: Submit the form with a future date of birth
    Given I navigate to "https://lkmdemoaut.accenture.com/AccenSportz/#/webelements/form"
    When I fill out the registration form with the following details:
      | First Name   | John       |
      | Last Name    | Doe        |
      | Email        | john.doe@example.com |
      | Phone Number | 1234567890 |
      | Address      | 123 Main St |
      | Zip Code     | 12345      |
    And I enter date of birth as "2030-01-01"
    And I submit the registration form
    Then I should see a validation error message "This field is required."
