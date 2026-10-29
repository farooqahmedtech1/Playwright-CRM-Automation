import { test, expect } from "./fixtures.js";

import leadsData from "../testData/01_Leads.json";
import orgData from "../testData/02_organization.json";
import contactsData from "../testData/03_contacts.json";
import opportunityData from "../testData/04_opportunities.json";
import productData from "../testData/05_Product.json";
import quotesData from "../testData/06_Quotes.json";
import salesOrderData from "../testData/07_SalesOrder.json";
import invoiceData from "../testData/08_Invoice.json";
import vendorData from "../testData/09_Vendor.json";
import priceBookData from "../testData/10_PriceBook.json";
import purchaseOrderData from "../testData/11_PurchaseOrder.json";
import ticketData from "../testData/12_Ticket.json";


test.describe("CRM Application Test Suite", () => {

    // 1. LEADS
    test("01 - Leads", async ({ page, login, homePage, leadsPage }) => {
        test.slow();

        await login();

        await homePage.leadsLink.click({ timeout: 25000 });
        await homePage.creatLeadsImg.click({ timeout: 20000 });

        await leadsPage.FnDRopdown.selectOption({ value: "Mr." });
        await leadsPage.Firstname.fill(leadsData.firstname);
        await leadsPage.Lastname.fill(leadsData.lastname);
        await leadsPage.Companyname.fill(leadsData.company);
        await leadsPage.mobile.fill(String(leadsData.Mobile));
        await leadsPage.email.fill(leadsData.email);
        await leadsPage.descriptiontextarea.fill(leadsData.discription);

        await expect(leadsPage.Firstname).toHaveValue(leadsData.firstname);
        await expect(leadsPage.Lastname).toHaveValue(leadsData.lastname);
        await expect(leadsPage.Companyname).toHaveValue(leadsData.company);
        await expect(leadsPage.email).toHaveValue(leadsData.email);

        await leadsPage.saveButton.click({ timeout: 20000 });
        await page.waitForLoadState("domcontentloaded")
        
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });
        console.log("SUCCESS: Lead Created Successfully");

        
    });


    // 2. ORGANIZATION
    test("02 - Organization", async ({ page, login, homePage, organizationPage }) => {
        test.slow();

        await login();

        await homePage.orgLink.click({ timeout: 25000 });
        await homePage.creatOrgImg.click({ timeout: 20000 });

        await organizationPage.OrganizationName.fill(orgData.Org);
        await organizationPage.Website.fill(orgData.Website);
        await organizationPage.Employees.fill(String(orgData.Employees));
        await organizationPage.IndsDropDown.selectOption({ value: "Engineering" });
        await organizationPage.TypeDropDown.selectOption({ value: "Customer" });
        await organizationPage.AnnualRevenue.fill(String(orgData.AnnualRevenue));

        await expect(organizationPage.OrganizationName).toHaveValue(orgData.Org);
        await expect(organizationPage.Website).toHaveValue(orgData.Website);
        await expect(organizationPage.Employees).toHaveValue(String(orgData.Employees));

        await organizationPage.SaveButton.click({ timeout: 20000 });
        await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Organization Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 3. CONTACTS
    test("03 - Contacts", async ({ page, login, homePage, contactsPage }) => {
        test.slow();

        await login();

        await homePage.contactsLink.click({ timeout: 25000 });
        await homePage.creatContactsImg.click({ timeout: 20000 });

        await contactsPage.Dropdown.selectOption({ label: "Mr." });
        await contactsPage.Firstname.fill(contactsData.firstname);
        await contactsPage.Lastname.fill(contactsData.lastname);

        const [contactPopup] = await Promise.all([page.waitForEvent("popup"), contactsPage.SelectButton.click()]);
        await contactPopup.getByRole("link", { name: "Test Yantra" }).click();

        await contactsPage.leaddropdown.selectOption({ value: "Employee" });
        await contactsPage.Email.fill(contactsData.email);

        await expect(contactsPage.Firstname).toHaveValue(contactsData.firstname);
        await expect(contactsPage.Lastname).toHaveValue(contactsData.lastname);
        await expect(contactsPage.Email).toHaveValue(contactsData.email);

        await contactsPage.saveButton.click({ timeout: 20000 });
        await page.waitForTimeout(5000);
        
        console.log("SUCCESS: Contact Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 4. OPPORTUNITY
    test("04 - Opportunity", async ({ page, login, homePage, opportunityPage }) => {
        test.slow();

        await login();

        await homePage.OpportunityLink.click({ timeout: 20000 });
        await homePage.createOpporImg.click({ timeout: 20000 });

        await opportunityPage.opportunityname.fill(opportunityData.Opporname);

        const [opportunityPopup] = await Promise.all([page.waitForEvent("popup"), opportunityPage.SelectButton.click()]);
        await opportunityPopup.getByRole("link", { name: "Test Yantra" }).click();

        await opportunityPage.dropdown1.selectOption({ value: "New Business" });
        await opportunityPage.dropdown2.selectOption({ value: "Employee" });
        await opportunityPage.amount.fill(String(opportunityData.Amount));
        await opportunityPage.nextstep.fill(opportunityData.NextStep);
        await opportunityPage.dropdown3.selectOption({ value: "Prospecting" });
        await opportunityPage.probability.fill(String(opportunityData.Probability));

        await expect(opportunityPage.opportunityname).toHaveValue(opportunityData.Opporname);
        await expect(opportunityPage.amount).toHaveValue(String(opportunityData.Amount));

        await opportunityPage.saveButton.click({ timeout: 25000 });
        await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Opportunity Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 5. PRODUCT
    test("05 - Product", async ({ page, login, homePage, productPage }) => {
        test.slow();

        await login();

        await homePage.productLink.click({ timeout: 25000 });
        await homePage.createProductImg.click({ timeout: 20000 });

        await productPage.productname.fill(productData.ProductName);
        await productPage.partnumber.fill(productData.PartNumber);
        await productPage.dropdown3.selectOption({ value: "LexPon Inc." });
        await productPage.salesstartdate.fill(productData.SalesStartDate);
        await productPage.dropdown1.selectOption({ value: "Software" });
        await productPage.vendorpartno.fill(productData.VendorPartNo);
        await productPage.dropdown2.selectOption({ value: "300-Sales-Software" });
        await productPage.supportstartdate.fill(productData.SupportStartDate);
        await productPage.supportexpirydate.fill(productData.SupportExpiryDate);
        await productPage.mfrpartno.fill(productData.MfrPartNo);
        await productPage.serialno.fill(productData.SerialNo);

        await expect(productPage.productname).toHaveValue(productData.ProductName);
        await expect(productPage.partnumber).toHaveValue(productData.PartNumber);

        await productPage.saveButton.click({ timeout: 20000 });
        await page.waitForLoadState("domcontentloaded")
       
        console.log("SUCCESS: Product Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 6. QUOTES
    test("06 - Quotes", async ({ page, login, homePage, quotesPage }) => {
        test.slow();

        await login();

        await homePage.QuoteLink.click();
        await homePage.createQuoteImg.click();

        await quotesPage.subject.fill(quotesData.Subject);
        await quotesPage.validtill.fill(quotesData.ValidTill);
        await quotesPage.dropdown1.selectOption({ value: "BlueDart" });
        await quotesPage.dropdown2.selectOption({ value: "Created" });

        const [quoteContactPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(1).click()]);
        await quoteContactPopup.getByRole("link", { name: "Farooq Ahmed" }).first().click();

        const [quoteOrganizationPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(2).click()]);
        await quoteOrganizationPopup.getByRole("link", { name: "Test Yantra" }).click();

        await quotesPage.billingadress.fill(quotesData.BillingAddress);
        await quotesPage.billingCity.fill(quotesData.BillingCity);
        await quotesPage.billingState.fill(quotesData.BillingState);
        await quotesPage.postalCode.fill(quotesData.BillingPostalCode);
        await quotesPage.billingCountry.fill(quotesData.BillingCountry);
        await quotesPage.shippinggadress.fill(quotesData.shippingAdress);

        const [quoteProductPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Products" }).click()]);
        await quoteProductPopup.getByRole("link", { name: "CRM Automation Suite" }).first().click();

        await quotesPage.qtty.fill(String(quotesData.Qty));
        await quotesPage.listprice.fill(String(quotesData.ListPrice));

        await expect(quotesPage.subject).toHaveValue(quotesData.Subject);
       
        await quotesPage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Quote Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 7. SALES ORDER
    test("07 - Sales Order", async ({ page, login, homePage, salesOrderPage }) => {
        test.slow();

        await login();

        await homePage.more.first().click();
        await homePage.SalesOrderLink.click();
        await homePage.createSalesImg.click();

        await salesOrderPage.Subject.fill(salesOrderData.Subject);

        const [salesQuotePopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(1).click()]);
        await salesQuotePopup.getByRole("link", { name: "CRM Software Quote" }).first().click();

        const [salesContactPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(2).click()]);
        await salesContactPopup.getByRole("link", { name: "Farooq Ahmed" }).first().click();

        await salesOrderPage.dropdown1.selectOption({ value: "BlueDart" });
        await salesOrderPage.dropdown2.selectOption({ value: "Created" });
        await salesOrderPage.duedate.fill(salesOrderData.DueDate);

        const [salesOrganizationPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(3).click()]);
        await salesOrganizationPopup.getByRole("link", { name: "Test Yantra" }).first().click();

        await salesOrderPage.billingadress.fill(salesOrderData.BillingAddress);
        await salesOrderPage.billingCity.fill(salesOrderData.BillingCity);
        await salesOrderPage.billingState.fill(salesOrderData.BillingState);
        await salesOrderPage.postalCode.fill(salesOrderData.BillingPostalCode);
        await salesOrderPage.billingCountry.fill(salesOrderData.BillingCountry);
        await salesOrderPage.shippinggadress.fill(salesOrderData.shippingAdress);

        await salesOrderPage.qtty.fill(String(salesOrderData.Qty));
        await salesOrderPage.listprice.fill(String(salesOrderData.ListPrice));

        await expect(salesOrderPage.Subject).toHaveValue(salesOrderData.Subject);

        await salesOrderPage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
       
        console.log("SUCCESS: Sales Order Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 8. INVOICE
    test("08 - Invoice", async ({ page, login, homePage, invoicePage }) => {
        test.slow();

        await login();

        await homePage.more.first().click();
        await homePage.InvoiceLink.click();
        await homePage.InvoiceImg.click();

        await invoicePage.Subject.fill(invoiceData.Subject);

        const [invoiceQuotePopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).first().click()]);
        await invoiceQuotePopup.getByRole("link", { name: "CRM Software" }).first().click();

        const [invoiceContactPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(1).click()]);
        await invoiceContactPopup.getByRole("link", { name: "Farooq Ahmed" }).first().click();

        await invoicePage.dropdown1.selectOption({ value: "Created" });
        await invoicePage.duedate.fill(invoiceData.DueDate);
        await invoicePage.InvoiceDate.fill(invoiceData.InvoiceDate);

        const [invoiceOrganizationPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(2).click()]);
        await invoiceOrganizationPopup.getByRole("link", { name: "Test Yantra" }).click();

        await invoicePage.billingadress.fill(invoiceData.BillingAddress);
        await invoicePage.billingCity.fill(invoiceData.BillingCity);
        await invoicePage.billingState.fill(invoiceData.BillingState);
        await invoicePage.postalCode.fill(invoiceData.BillingPostalCode);
        await invoicePage.billingCountry.fill(invoiceData.BillingCountry);
        await invoicePage.shippinggadress.fill(invoiceData.shippingAdress);

        await invoicePage.qtty.fill(String(invoiceData.Qty));
        await invoicePage.listprice.fill(String(invoiceData.ListPrice));

        await expect(invoicePage.Subject).toHaveValue(invoiceData.Subject);

        await invoicePage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Invoice Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 9. VENDOR
    test("09 - Vendor", async ({ page, login, homePage, vendorPage }) => {
        test.slow();

        await login();

        await homePage.more.first().click();
        await homePage.VendorLink.click({ timeout: 20000 });
        await homePage.VendorImg.click({ timeout: 20000 });

        await vendorPage.Vendorname.fill(vendorData.VendorName);
        await vendorPage.category.fill(vendorData.Category);
        await vendorPage.email.fill(vendorData.Email);
        await vendorPage.phone.fill(String(vendorData.Phone));
        await vendorPage.website.fill(vendorData.Website);
        await vendorPage.street.fill(vendorData.Street);
        await vendorPage.city.fill(vendorData.City);
        await vendorPage.postalcode.fill(String(vendorData.PostalCode));
        await vendorPage.state.fill(vendorData.State);
        await vendorPage.country.fill(vendorData.Country);
        await vendorPage.description.fill(vendorData.Description);

        await expect(vendorPage.Vendorname).toHaveValue(vendorData.VendorName);

        await vendorPage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Vendor Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 10. PRICE BOOK
    test("10 - Price Book", async ({ page, login, homePage, priceBookPage }) => {
        test.slow();

        await login();

        await homePage.more.first().click();
        await homePage.PriceBook.click({ timeout: 25000 });
        await homePage.PriceBookImg.click({ timeout: 25000 });

        await priceBookPage.bookname.fill(priceBookData.BookName);
        await priceBookPage.description.fill(priceBookData.Description);

        await expect(priceBookPage.bookname).toHaveValue(priceBookData.BookName);

        await priceBookPage.saveButton.click({ timeout: 25000 });
        await page.waitForLoadState("domcontentloaded")
      
        console.log("SUCCESS: Price Book Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

       
    });


    // 11. PURCHASE ORDER
    test("11 - Purchase Order", async ({ page, login, homePage, purchaseOrderPage }) => {
        test.slow();

        await login();

        await homePage.more.first().click();
        await homePage.PurchaseLink.click({ timeout: 20000 });
        await homePage.PurchaseImg.click({ timeout: 20000 });

        await purchaseOrderPage.Subject.fill(purchaseOrderData.Subject);

        const [purchaseVendorPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).first().click()]);
        await purchaseVendorPopup.getByRole("link", { name: "TechNova Solutions" }).first().click();

        const [purchaseContactPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(1).click()]);
        await purchaseContactPopup.getByRole("link", { name: "Farooq Ahmed" }).first().click();

        await purchaseOrderPage.dropdown1.selectOption({ value: "Created" });
        await purchaseOrderPage.dropdown2.selectOption({ value: "BlueDart" });
        await purchaseOrderPage.Duedate.fill(purchaseOrderData.DueDate);
        await purchaseOrderPage.Trackingnumber.fill(String(purchaseOrderData.TrackingNumber));
        await purchaseOrderPage.RequisitionNo.fill(String(purchaseOrderData.RequisitionNumber));

        await purchaseOrderPage.billadress.fill(purchaseOrderData.BillingAddress);
        await purchaseOrderPage.billingCity.fill(purchaseOrderData.BillingCity);
        await purchaseOrderPage.billingState.fill(purchaseOrderData.BillingState);
        await purchaseOrderPage.postalCode.fill(String(purchaseOrderData.BillingPostalCode));
        await purchaseOrderPage.billingCountry.fill(purchaseOrderData.BillingCountry);
        await purchaseOrderPage.shippinggadress.fill(purchaseOrderData.shippingAdress);

        await purchaseOrderPage.qtty.fill(String(purchaseOrderData.Qty));
        await purchaseOrderPage.listprice.fill(String(purchaseOrderData.ListPrice));

        await expect(purchaseOrderPage.Subject).toHaveValue(purchaseOrderData.Subject);

        await purchaseOrderPage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
       
        console.log("SUCCESS: Purchase Order Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

        
    });


    // 12. TICKET
    test("12 - Ticket", async ({ page, login, homePage, ticketPage }) => {
        test.slow();

        await login();

        await homePage.TicketLink.click({ timeout: 20000 });
        await homePage.TicketImg.click({ timeout: 20000 });

        await ticketPage.title.fill(ticketData.Tiltle);
        await ticketPage.dropdown1.selectOption({ value: "Urgent" });
        await ticketPage.dropdown2.selectOption({ value: "Major" });
        await ticketPage.dropdown3.selectOption({ value: "Big Problem" });

        const [ticketContactPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).first().click()]);
        await ticketContactPopup.getByRole("link", { name: "Farooq Ahmed" }).first().click();

        const [ticketProductPopup] = await Promise.all([page.waitForEvent("popup"), page.getByRole("img", { name: "Select" }).nth(1).click()]);
        await ticketProductPopup.getByRole("link", { name: "CRM Automation Suit" }).first().click();

        await ticketPage.dropdown4.selectOption({ value: "Open" });
        await ticketPage.hours.fill(String(ticketData.Hours));
        await ticketPage.days.fill(String(ticketData.Days));
        await ticketPage.description.fill(ticketData.Description);

        await expect(ticketPage.title).toHaveValue(ticketData.Tiltle);

        await ticketPage.saveButton.click({ timeout: 20000 });
         await page.waitForLoadState("domcontentloaded")
        
        console.log("SUCCESS: Ticket Created Successfully");
        await page.screenshot({ path: "screenshot/Leadsscreenshot.png", fullPage: true, timeout: 60000 });

       
    });

    
// 13. LOGOUT -

    test("13 - Logout", async ({ page, homePage }) => {
        await page.goto(process.env.Base_URL);
        await expect(homePage.leadsLink).toBeVisible({timeout: 30000});
        await homePage.logout();
        console.log("SUCCESS: All test cases completed and logged out");
    });

});