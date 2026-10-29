class Opportunity{
    constructor(page){
        this.opportunityname=page.locator('//input[@name="potentialname"]')
        this.SelectButton = page.getByRole('img', { name: 'Select' }).first();
        this.dropdown1= page.locator('//select[@name="opportunity_type"]')
        this.dropdown2=page.locator('//select[@name="leadsource"]')
        this.amount=page.locator('//input[@name="amount"]')
        this.nextstep=page.locator('//input[@name="nextstep"]')
        this.dropdown3=page.locator('//select[@name="sales_stage"]')
        this.probability=page.locator('//input[@name="probability"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
        
    }
}
export default Opportunity