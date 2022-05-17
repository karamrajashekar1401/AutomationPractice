class basePage {
  open() {
    browser.url("http://automationpractice.com/index.php");
    const browserTitle = browser.getTitle();
  browser.maximizeWindow();
  }
  get signIn() {
    return $(".login");
  }
  async gotoSignin() {
    await expect(this.signIn).toBePresent();
    await this.signIn.click();
  }
}
module.exports = new basePage();
