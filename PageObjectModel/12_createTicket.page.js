class CreateTicket{
    constructor(page){
        this.title=page.locator('//textarea[@name="ticket_title"]')
        this.dropdown1=page.locator('//select[@name="ticketpriorities"]')
        this.dropdown2=page.locator('//select[@name="ticketseverities"]')
        this.dropdown3=page.locator('//select[@name="ticketcategories"]')
        this.dropdown4=page.locator('//select[@name="ticketstatus"]')
        this.hours=page.locator('//input[@name="hours"]')
        this.days=page.locator('//input[@name="days"]')
        this.description=page.locator('//textarea[@class="detailedViewTextBox"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
    }
}
export default CreateTicket