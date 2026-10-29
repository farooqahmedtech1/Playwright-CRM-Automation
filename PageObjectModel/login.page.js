class loginclass{
    constructor(page){
        
        this.username= page.locator('//input[@name="user_name"]');
        this.password= page.locator('//input[@name="user_password"]');
        this.button= page.getByRole('button',{name:'Login'})
    }
}
export default loginclass