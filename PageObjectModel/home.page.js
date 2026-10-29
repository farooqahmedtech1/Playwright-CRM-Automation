class home{
    constructor(page){
        this.leadsLink=page.getByRole('link',{name:'LEADS'})
        this.creatLeadsImg=page.locator('//img[@alt="Create Lead..."]')
        this.orgLink=page.getByRole('link',{name:"ORGANIZATIONS"})
        this.creatOrgImg=page.locator('//img[@alt="Create Organization..."]')
        this.contactsLink=page.getByRole('link',{name:'CONTACTS'})
        this.creatContactsImg=page.locator(('//img[@alt="Create Contact..."]'))
        this.OpportunityLink=page.getByRole('link',{name:'OPPORTUNITIES'})
        this.createOpporImg=page.locator('//img[@alt="Create Opportunity..."]')
        this.productLink=page.getByRole('link',{name:'Products'})
        this.createProductImg=page.locator('//img[@alt="Create Product..."]')
        // this.more=page.getByRole('link',{name:"More"}).first().click()

        this.more = page.getByRole('link', { name: 'More' })
        this.QuoteLink = page.getByRole('link', { name: 'Quotes', exact: true });
        this.createQuoteImg = page.locator('//img[@alt="Create Quote..."]');


        this.more = page.getByRole('link', { name: 'More' });
        this.SalesOrderLink = page.getByRole('link', {name: 'Sales Order',exact: true});
        this.createSalesImg = page.locator( '//img[@alt="Create Sales Order..."]')


        this.more = page.getByRole('link', { name: 'More' });
        this.InvoiceLink = page.getByRole('link', {name: 'Invoice',exact: true});
        this.InvoiceImg = page.locator( '//img[@alt="Create Invoice..."]')

        this.TicketLink= page.getByRole('link',{name:"TROUBLE TICKETS"})
        this.TicketImg = page.locator( '//img[@alt="Create Ticket..."]')

        this.more = page.getByRole('link', { name: 'More' });
        this.VendorLink = page.getByRole('link', {name: 'Vendors',exact: true});
        this.VendorImg = page.locator( '//img[@alt="Create Vendor..."]')

        this.more = page.getByRole('link', { name: 'More' });
        this.PriceBook = page.locator('//a[@name="Price Books"]')
        this.PriceBookImg = page.locator( '//img[@alt="Create Price Book..."]')

        this.more = page.getByRole('link', { name: 'More' });
        this.PurchaseLink = page.getByRole('link', {name: 'Purchase Order',exact: true});
        this.PurchaseImg = page.locator( '//img[@alt="Create Purchase Order..."]')


         // Logout
        this.profileImage = page.locator('//img[@src="themes/softed/images/user.PNG"]');
        this.signOutLink = page.locator('//a[text()="Sign Out"]');
    }

    // Logout method
    async logout() {
        await this.profileImage.hover();
        await this.signOutLink.waitFor({state: 'visible',timeout: 10000});
        await this.signOutLink.click();
        console.log('SUCCESS: Logged out from CRM');
    
    }

}

export default home