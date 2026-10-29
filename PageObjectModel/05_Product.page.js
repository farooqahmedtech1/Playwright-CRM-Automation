class CreatProduct{
    constructor(page){
        this.productname=page.locator('//input[@name="productname"]')
        this.salesstartdate=page.locator('//input[@name="sales_start_date"]')
        this.dropdown1=page.locator('//select[@name="productcategory"]')
        this.salesenddate=page.locator('//input[@name="sales_end_date"]')
        this.vendorpartno=page.locator('//input[@name="vendor_part_no"]')
        this.dropdown2=page.locator('//select[@name="glacct"]')
        this.partnumber=page.locator('//input[@name="productcode"]')
        this.dropdown3=page.locator('//select[@name="manufacturer"]')
        this.supportstartdate=page.locator('//input[@name="start_date"]')
        this.supportexpirydate=page.locator('//input[@name="expiry_date"]')
        this.mfrpartno=page.locator('//input[@name="mfr_part_no"]')
        this.serialno=page.locator('//input[@name="serial_no"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()

    }
}
export default CreatProduct