class CreatOrganization{
    constructor(page){
        this.OrganizationName=page.locator('//input[@name="accountname"]')
        this.Website=page.locator('//input[@name="website"]')
        this.Employees=page.locator('//input[@id="employees"]')
        this.IndsDropDown=page.locator('//Select[@name="industry"]')
        this.TypeDropDown=page.locator('//Select[@name="accounttype"]')
        this.AnnualRevenue=page.locator('//input[@name="annual_revenue"]')
        this.SaveButton=page.locator('(//input[@class="crmbutton small save"])[1]')
    }
}

export default CreatOrganization