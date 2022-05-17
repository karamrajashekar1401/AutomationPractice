//const dynamic = require("next/dynamic");

// const {} = dynamic(import("tw-elements"), { ssr: false });

class welComePage{
get name()
{ return $("//a[@class='account']/span");
}
async valuename()
{
   var a= await(await this.name).getText();
    console.log("returing value of a " + a);
    return a;
}
get pagelogout()
{
    return $(".logout");
}
async signout()
{
    await (await this.pagelogout).click();
}
get searchA(){
return $("#search_query_top");
}
get search(){
    return $("//button[@class='btn btn-default button-search']");
}

async searchProduct(){
    await this.searchA.setValue("Printed summer Dress") ;
    await (await this.search).click();
}

}
module.exports = new welComePage();