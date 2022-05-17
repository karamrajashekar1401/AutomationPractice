class paymentPage{
    get productValidatePayment(){
        return $("//td[@class='cart_description']/small[@class='cart_ref']");
    }

    async productOnPayment(){
    var prodPayment = await (await this.productValidatePayment).getText();
    console.log("Product name in the payment page is " + prodPayment);
    return prodPayment;
    }
    
}
module.exports = new paymentPage();