class CreatePriceBook{
    constructor(page){
        this.bookname=page.locator('//input[@name="bookname"]')
        this.description=page.locator('//textarea[@name="description"]')
        this.saveButton=page.getByRole('button',{name:'Save'}).first()
    }
}
export default CreatePriceBook