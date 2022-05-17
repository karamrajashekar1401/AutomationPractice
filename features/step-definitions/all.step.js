const { Given, When, Then } = require("@cucumber/cucumber");
const basePage = require("../pages/base.page");
const { enterEmail } = require("../pages/login.page");
const loginPage = require("../pages/login.page");
const registerPage = require("../pages/register.page");
const welcomePage = require("../pages/welcome.page");
const welComePage = require("../pages/welcome.page");
const addCart = require("../pages/addcart.page");
const paymentPage = require("../pages/payment.page");
var valuepro = "";
var valueTwo = "";
//var emlRand=loginPage.newEmail;

Given(/^The user is on home page and clicks on Sign in button$/, async () => {
  await basePage.open();
  await basePage.gotoSignin();
});
When(
  /^User enters the details (.*) to register and logs in$/,
  async (emailval) => {
    await loginPage.enterDetails(emailval);
    await expect(registerPage.title).toBePresent();
    await registerPage.personalDetail();
    await registerPage.addrDetails();
    await registerPage.submitRegister();
  }
);
Then(
  /^User will be able to logout and login again using same (.*) credentials$/,
  async (emailval) => {
    await expect(welcomePage.name).toBePresent();
    await welComePage.valuename();
    await welComePage.signout();
    //await (await loginPage.emailIdLogin).setValue(this.emlRand);
    await loginPage.loginExUser(emailval);
    await expect(welcomePage.valuename == "sampleFirstName sampleLastName");
    await welComePage.signout();
    browser.pause(10000);
    console.log("executed all the steps in first scenario");
    // await browser.closeWindow();
  }
);
Given(/^User logs in to the website$/, async () => {
  await basePage.open();
  await basePage.gotoSignin();
  await loginPage.simpleLogin();
});
When(/^Searching for a product and add the product to the cart$/, async () => {
  await welcomePage.searchProduct();
  //await addCart.AddProduct();
  this.valuepro = await addCart.AddProduct();
});
Then(
  /^The product details get displayed correctly on the payment page$/,
  async () => {
    //await paymentPage.productOnPayment();
    this.valueTwo = await paymentPage.productOnPayment();
    await expect(await paymentPage.productValidatePayment).toHaveTextContaining(
      this.valuepro
    );
  }
);
