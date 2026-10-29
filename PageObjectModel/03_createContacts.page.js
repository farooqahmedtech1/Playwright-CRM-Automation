
import { expect } from '@playwright/test';

class CreateContacts {
    constructor(page) {
        this.page = page;

        this.Dropdown = page.locator('//select[@name="salutationtype"]');
        this.Firstname = page.locator('//input[@name="firstname"]');
        this.Lastname = page.locator('//input[@name="lastname"]');
        this.LeadSource = page.locator('//select[@name="leadsource"]');
        this.Email = page.locator('//input[@name="email"]');
        this.leaddropdown=page.locator('//select[@name="leadsource"]')

        this.SelectButton = page.getByRole('img', { name: 'Select' }).first();
        this.saveButton=page.getByRole('button',{name:'Save'}).first()

        
    }

    
}


export default CreateContacts;
