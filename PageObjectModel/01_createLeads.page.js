class CreateLeads{
    constructor(page){
        this.FnDRopdown=page.locator('//select[@name="salutationtype"]')
        this.Firstname=page.locator('//input[@name="firstname"]')
        this.Lastname=page.locator('//input[@name="lastname"]')
        this.Companyname=page.locator('//input[@name="company"]')
        this.descriptiontextarea=page.locator('//textarea[@name="description"]')
        this.mobile= page.locator('//input[@name="mobile"]')
        this.email=page.locator('//input[@name="email"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
        
    }
}
export default CreateLeads