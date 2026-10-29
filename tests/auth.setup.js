import { test as setup, expect } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';

import signin from '../PageObjectModel/signin.page.js';
import home from '../PageObjectModel/home.page.js';

dotenv.config();

const authFile = 'playwright/.auth/user.json';

setup('CRM Login Setup', async ({ page }) => {
    await fs.mkdir('playwright/.auth', { recursive: true });

    const signinPage = new signin(page);
    const homePage = new home(page);

    await page.goto(process.env.Base_URL);

    await signinPage.usernameTF.fill(process.env.USER_NAME);
    await signinPage.pwdTF.fill(process.env.USER_PASSWORD);
    await signinPage.loginButton.click();

    // Confirm successful login
    await expect(homePage.leadsLink).toBeVisible({timeout: 30000,});

    // Save login session
    await page.context().storageState({path: authFile,});

    console.log('Login successful. Storage State saved.');
});