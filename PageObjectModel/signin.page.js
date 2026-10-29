class signin{
    constructor(page){
        this.usernameTF=page.locator('//input[@name="user_name"]')
        this.pwdTF=page.locator('//input[@name="user_password"]')
        this.loginButton=page.getByRole('button',{name:'Login'})
    }
}
export default signin