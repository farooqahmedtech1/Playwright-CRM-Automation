class CreateQuotes{
    constructor(page){
        this.subject=page.locator('//input[@name="subject"]')
        this.validtill=page.locator('//input[@name="validtill"]')
        this.dropdown1=page.locator('//select[@name="carrier"]')
        this.dropdown2=page.locator('//select[@name="quotestage"]')
        this.billingadress=page.locator('//textarea[@name="bill_street"]')
        this.billingCity=page.locator('//input[@name="bill_city"]')
        this.billingState=page.locator('//input[@name="bill_state"]')
        this.postalCode=page.locator('//input[@name="bill_code"]')
        this.billingCountry=page.locator('//input[@name="bill_country"]')
        this.shippinggadress=page.locator('//textarea[@name="ship_street"]')

        this.qtty=page.locator('//input[@name="qty1"]')
        this.listprice=page.locator('//input[@name="listPrice1"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
    }
}
export default CreateQuotes