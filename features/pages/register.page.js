class registerPage {
  get title() {
    return $(".page-heading");
  }
  get gender() {
    return $("#uniform-id_gender1");
  }
  get fName() {
    return $("#customer_firstname");
  }
  get lName() {
    return $("#customer_lastname");
  }
  get password() {
    return $("#passwd");
  }
  get dobDay() {
    return $("#days");
  }
  get dobMon() {
    return $("#months");
  }
  get dobYear() {
    return $("#years");
  }
  get company() {
    return $("#company");
  }

  get address() {
    return $("#address1");
  }
  get city() {
    return $("#city");
  }

  get state() {
    return $("#id_state");
  }
  get postCode() {
    return $("#postcode");
  }
  get country() {
    return $("#id_country");
  }
  get addInfor() {
    return $("#other");
  }
  get homePhome() {
    return $("#phone");
  }
  get mobPhone() {
    return $("#phone_mobile");
  }
  get registerration() {
    return $("#submitAccount");
  }
  async personalDetail(){
      await (await this.gender).click();
      await (await this.fName).setValue('sampleFirstName');
      await (await this.lName).setValue('sampleLastName');
      await (await this.password).setValue("Test@1234");  
    await (await this.dobDay).selectByIndex(4);
    await (await this.dobMon).selectByAttribute("value","4");
    await (await this.dobYear).selectByAttribute("value","1990");
    }
    async addrDetails(){
await (await this.company).setValue("ABC systems");
await (await this.address).setValue("3 first street");
await this.city.setValue("Bristol");
await (await this.state).selectByAttribute("value","5");
await (await this.postCode).setValue("91210");
await (await this.country).selectByAttribute("value","21");
await (await this.addInfor).setValue("provided sample information");
await (await this.homePhome).setValue("+1 276-466-1578");
await (await this.mobPhone).setValue("+1 276-466-1578");
}
async submitRegister(){
    await this.registerration.click();
}
}
module.exports = new registerPage();
