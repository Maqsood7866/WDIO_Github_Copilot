class PlayerRegistrationPage {
  get firstNameInput() {
    return $('#firstname');
  }

  get lastNameInput() {
    return $('[formcontrolname="lastname"]');
  }

  get emailInput() {
    return $('[name="email"]');
  }

  get phoneNumberInput() {
    return $('#phonenumber');
  }

  get addressInput() {
    return $('[name="address"]');
  }

  get zipCodeInput() {
    return $('[formcontrolname="zipcode"]');
  }

  get dateOfBirthInput() {
    return $('#Date');
  }

  get genderRadioButton() {
    return (gender) => $(`//label[text()="${gender}"]`);
  }

  get ageRangeDropdown() {
    return $('[name="selectage"]');
  }

  get ageRangeOption() {
    return (ageRange) => $(`//mat-option[.="${ageRange}"]`);
  }

  get weightSlider() {
    return $('.mdc-slider__input[type="range"]');
  }

  get sportsDropdown() {
    return $('#multisport');
  }

  get sportOption() {
    return (sport) => $(`//*[text()="${sport}"]`);
  }

  get fileInput() {
    return $('input[type="file"][formcontrolname="accept"]');
  }

  get termsCheckbox() {
    return $('.mdc-checkbox');
  }

  get submitButton() {
    return $('[type="submit"]'); 
  }

  get validationErrorMessages() {
    return $$('//mat-error[starts-with(@id, "mat-mdc-error")]'); // Replace with the actual selector for error messages
  }

  async getAllValidationErrors() {
    const errors = await this.validationErrorMessages.map(async (error) => {
      return await error.getText();
    });
    return Promise.all(errors);
  }

  get confirmationMessage() {
    return $('.registrationsuccess');
  }
}

export default new PlayerRegistrationPage();