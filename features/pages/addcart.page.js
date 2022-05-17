class addCart {
  get product() {
    return $(
      "//img[@src='http://automationpractice.com/img/p/1/2/12-home_default.jpg']"
    );
  }
  get addtoCart() {
    return $("//p[@id='add_to_cart']/button/span");
  }
  get proceed() {
    return $(
      "//div[@class='button-container']/a[@class='btn btn-default button button-medium']/span"
    );
  }
  get proceedAdd() {
    return $(
      "//p[@class='cart_navigation clearfix']/a[@class='button btn btn-default standard-checkout button-medium']/span"
    );
  }
  get ProceedCheckout() {
    return $(
      "//p[@class='cart_navigation clearfix']/button[@class='button btn btn-default button-medium']/span"
    );
  }
  get agreeTC() {
    return $(
      "//p[@class='checkbox']/div[@class='checker']/span/input[@type='checkbox']"
    );
  }
  get proceedShip() {
    return $(
      "//p[@class='cart_navigation clearfix']/button[@class='button btn btn-default standard-checkout button-medium']/span"
    );
  }
  get productvalue() {
    return $(
      "//div[@class='pb-center-column col-xs-12 col-sm-4']/p[@id='product_reference']/span"
    );
  }
  async productInitial() {
    var productValueInitial = await (await this.productvalue).getText();
    console.log("product Value in the initial page is " + productValueInitial);
    return productValueInitial;
  }
  async AddProduct() {
    await (await this.product).click();
    await this.addtoCart.click();

    var tempvalue = await this.productInitial();
    await (await this.proceed).waitForClickable({ timeout: 20000 });
    await (await this.proceed).click();
    await (await this.proceedAdd).waitForClickable({ timeout: 20000 });
    await (await this.proceedAdd).click();
    await (await this.ProceedCheckout).waitForClickable({ timeout: 20000 });
    await (await this.ProceedCheckout).click();

    await (await this.agreeTC).waitForExist();
    await (await this.agreeTC).click();
    await (await this.proceedShip).waitForClickable({ timeout: 20000 });
    await (await this.proceedShip).click();
    return tempvalue;
  }
}
module.exports = new addCart();
