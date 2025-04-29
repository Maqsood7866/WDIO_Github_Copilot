import { Given, When, Then } from '@wdio/cucumber-framework';
import PlayerRegistrationPage from '../pageobjects/playerRegistrationPage.js'; // Corrected path
import { expect } from '@wdio/globals';

Given('I navigate to {string}', async (url) => {
    await browser.url(url);
    await browser.maximizeWindow();
});

When('I fill out the registration form with the following details:', async (dataTable) => {
    const data = dataTable.rowsHash();
    await PlayerRegistrationPage.firstNameInput.setValue(data['First Name']);
    await PlayerRegistrationPage.lastNameInput.setValue(data['Last Name']);
    await PlayerRegistrationPage.emailInput.setValue(data['Email']);
    await PlayerRegistrationPage.phoneNumberInput.setValue(data['Phone Number']);
    await PlayerRegistrationPage.addressInput.setValue(data['Address']);
    await PlayerRegistrationPage.zipCodeInput.setValue(data['Zip Code']);
});

When('I enter date of birth as {string}', async (dob) => {
    await PlayerRegistrationPage.dateOfBirthInput.setValue(dob);
});

When('I select gender as {string}', async (gender) => {
    await PlayerRegistrationPage.genderRadioButton(gender).click();
});

When('I select my age range from the dropdown as {string}', async (ageRange) => {
    await PlayerRegistrationPage.ageRangeDropdown.click();
    await PlayerRegistrationPage.ageRangeOption(ageRange).click();
});

When('I set my weight by dragging and set it to {string}', async (weight) => {
    const slider = PlayerRegistrationPage.weightSlider;
    await slider.dragAndDrop({ x: parseInt(weight, 10), y: 0 });
});

When('I click on the sports and select 2 values as {string} and {string}', async (sport1, sport2) => {
    await PlayerRegistrationPage.sportsDropdown.click();
    await PlayerRegistrationPage.sportOption(sport1).click();
    await PlayerRegistrationPage.sportOption(sport2).click();
    await browser.keys('Escape'); // Close the dropdown
});

When('I click on upload photo and select an image from path {string}', async (imagePath) => {
    await PlayerRegistrationPage.fileInput.setValue(imagePath);
});

When('I click on the checkbox for Terms and Conditions', async () => {
    await PlayerRegistrationPage.termsCheckbox.click();
});

When('I submit the registration form', async () => {
    await PlayerRegistrationPage.submitButton.click(); 
    await browser.pause(3000); // Pause for 3 seconds
});

Then('I should see a confirmation message {string}', async (message) => {
    const confirmationMessage = await PlayerRegistrationPage.confirmationMessage.getText();
    expect(confirmationMessage).toBe(message);
});

Then('I should see a validation error message {string}', async (errorMessage) => {
    const errorMessages = await PlayerRegistrationPage.getAllValidationErrors();
    expect(errorMessages).toContain(errorMessage);
});