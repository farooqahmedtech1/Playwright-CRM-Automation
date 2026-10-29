class CreatePurchaseOrder{
    constructor(page){
        this.Subject= page.locator('//input[@name="subject"]')
        this.Trackingnumber= page.locator('//input[@name="tracking_no"]')
        this.Duedate= page.locator('//input[@name="duedate"]')
        this.RequisitionNo= page.locator('//input[@name="requisition_no"]')
        this.dropdown1= page.locator('//select[@name="postatus"]')
        this.dropdown2= page.locator('//select[@name="carrier"]')
        this.billadress= page.locator('//textarea[@name="bill_street"]')
        this.billingCity=page.locator('//input[@name="bill_city"]')
        this.billingState=page.locator('//input[@name="bill_state"]')
        this.postalCode=page.locator('//input[@name="bill_code"]')
        this.billingCountry=page.locator('//input[@name="bill_country"]')
        this.shippinggadress=page.locator('//textarea[@name="ship_street"]')

        this.qtty=page.locator('//input[@name="qty1"]')
        this.listprice=page.locator('//input[@name="listPrice1"]')
        this.saveButton= page.getByRole('button', { name: 'Save' }).first()
    }
}

export default CreatePurchaseOrder