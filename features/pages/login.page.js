class loginPage {
  get emailIdCrt() {
    return $("//input[@id='email_create']");
  }
  get newEmail() {
    let emailidInput;
  }

  get crAccntBtn() {
    return $("//button[@id='SubmitCreate']/span");
  }
  async enterDetails(emailval) {
    browser.pause(15000);
    //await (await this.emailIdCrt).setValue(this.newEmail);

    await (await this.emailIdCrt).setValue(emailval);
    await (await this.crAccntBtn).click();
  }
  get emailIdLogin() {
    return $("#email");
  }
  get passwordLogin() {
    return $("#passwd");
  }
  get signInLogin() {
    return $("//button[@id='SubmitLogin']/span");
  }
  async loginExUser(emailval) {
    await expect(this.emailIdLogin).toBePresent();
    await (await this.emailIdLogin).setValue(emailval);
    //await (await this.emailIdLogin).setValue(emlRand);
    await expect(this.passwordLogin).toBePresent();

    await (await this.passwordLogin).setValue("Test@1234");
    //   await (await this.signInLogin).toBePresent();

    await (await this.signInLogin).click();
  }
  async simpleLogin() {
    await expect(this.emailIdLogin).toBePresent();
    await (await this.emailIdLogin).setValue("sampletest_123@gmail.com");
    await expect(this.passwordLogin).toBePresent();
    await (await this.passwordLogin).setValue("Test@1234");
    await (await this.signInLogin).click();
  }
}

module.exports = new loginPage();
