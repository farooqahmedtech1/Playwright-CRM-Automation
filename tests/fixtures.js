import { test as base, expect } from "@playwright/test";
import dotenv from "dotenv"

import signin from "../PageObjectModel/signin.page.js";
import home from "../PageObjectModel/home.page.js";

import CreateLeads from "../PageObjectModel/01_createLeads.page.js";
import CreatOrganization from "../PageObjectModel/02_createOrg.page.js";
import CreateContacts from "../PageObjectModel/03_createContacts.page.js";
import CreateOpportunities from "../PageObjectModel/04_createOppor.page.js";
import CreatProduct from "../PageObjectModel/05_Product.page.js";
import CreateQuotes from "../PageObjectModel/06_createQuotes.page.js";
import CreateSalesOrder from "../PageObjectModel/07_createSalesOrder.page.js";
import CreateInvoice from "../PageObjectModel/08_createInvoice.page.js";
import CreateVendor from "../PageObjectModel/09_createVendor.page.js";
import CreatePriceBook from "../PageObjectModel/10_createPriceBook.page.js";
import CreatePurchaseOrder from "../PageObjectModel/11_createPurchaseOrder.page.js";
import CreateTicket from "../PageObjectModel/12_createTicket.page.js";

dotenv.config()

export const test = base.extend({

    signinPage: async ({ page }, use) => {
        await use(new signin(page));
    },

    homePage: async ({ page }, use) => {
        await use(new home(page));
    },

    leadsPage: async ({ page }, use) => {
        await use(new CreateLeads(page));
    },

    organizationPage: async ({ page }, use) => {
        await use(new CreatOrganization(page));
    },

    contactsPage: async ({ page }, use) => {
        await use(new CreateContacts(page));
    },

    opportunityPage: async ({ page }, use) => {
        await use(new CreateOpportunities(page));
    },

    productPage: async ({ page }, use) => {
        await use(new CreatProduct(page));
    },

    quotesPage: async ({ page }, use) => {
        await use(new CreateQuotes(page));
    },

    salesOrderPage: async ({ page }, use) => {
        await use(new CreateSalesOrder(page));
    },

    invoicePage: async ({ page }, use) => {
        await use(new CreateInvoice(page));
    },

    vendorPage: async ({ page }, use) => {
        await use(new CreateVendor(page));
    },

    priceBookPage: async ({ page }, use) => {
        await use(new CreatePriceBook(page));
    },

    purchaseOrderPage: async ({ page }, use) => {
        await use(new CreatePurchaseOrder(page));
    },

    ticketPage: async ({ page }, use) => {
        await use(new CreateTicket(page));
    },

    // login: async ({ page, signinPage }, use) => {

    //     const loginToCRM = async (data) => {
    //         await page.goto(data.url);

    //         await signinPage.usernameTF.fill(data.username);
    //         await signinPage.pwdTF.fill(data.pwd);

    //         await signinPage.loginButton.click({timeout: 20000});
    //     };

    //     await use(loginToCRM);
    // }




    // login: async ({ page, signinPage }, use) => {

    //     const loginToCRM = async ( ) => {
    //         await page.goto(process.env.Base_URL);

    //         await signinPage.usernameTF.fill(process.env.USER_NAME);
    //         await signinPage.pwdTF.fill(process.env.USER_PASSWORD);

    //         await signinPage.loginButton.click({timeout: 20000});
    //     };

    //     await use(loginToCRM);
    // }

    login: async ({ page }, use) => {
    const openCRM = async () => {
        await page.goto(process.env.Base_URL);
    };

    await use(openCRM);
    }

    

});

export { expect };