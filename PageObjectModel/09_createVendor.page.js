class CreateVendor{
    constructor(page){
        this.Vendorname=page.locator('//input[@name="vendorname"]')
        this.email=page.locator('//input[@name="email"]')
        this.category=page.locator('//input[@name="category"]')
        this.phone=page.locator('//input[@name="phone"]')
        this.website=page.locator('//input[@name="website"]')
        this.street=page.locator('//textarea[@name="street"]')
        this.city=page.locator('//input[@name="city"]')
        this.state=page.locator('//input[@name="state"]')
        this.postalcode=page.locator('//input[@name="postalcode"]')
        this.country=page.locator('//input[@name="country"]')
        this.description=page.locator('//textarea[@name="description"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
    }
}

export default CreateVendor