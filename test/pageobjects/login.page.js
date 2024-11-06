const { expect } = require('@wdio/globals');

class LoginPage {
    get txtStandardUser() { return $('~test-standard_user'); }
    get txtLockedOutUser() { return $('~test-locked_out_user'); }
    get errorMessage() { return $('~test-Error message'); }
    get btnSubmit() { return $('~test-LOGIN'); }

    async selectStandardUser() {
        this.txtStandardUser.scrollIntoView();
        await this.txtStandardUser.click();
    }

    async selectLockedOutUser() {
        this.txtLockedOutUser.scrollIntoView();
        await this.txtLockedOutUser.click();
    }

    async submitLogin() {
        await browser.waitUntil(async () => {
            return await this.btnSubmit.isEnabled();
        }, {
            timeout: 10000,
            timeoutMsg: 'Login button not enabled after 10 seconds'
        });
        await this.btnSubmit.click();
    }

    async validateErrorMessage() {
        try {
            const viewGroup = await $('~test-Error message');

            await browser.waitUntil(async () => {
                return await viewGroup.isDisplayed();
            }, {
                timeout: 10000,
                timeoutMsg: 'Error message view group not displayed after 10 seconds'
            });

            const textView = await viewGroup.$('android.widget.TextView');
            const message = await textView.getText();
            expect(message.toLowerCase()).toContain('locked out');

        } catch (error) {
            console.error(`Validation failed: ${error.message}`);
            expect(false).toBe(true);
        }
    }

    async validateSuccessfulLogin() {
        try {
            await browser.waitUntil(async () => {
                return await $('//android.widget.TextView[@text="PRODUCTS"]').isDisplayed();
            }, {
                timeout: 10000,
                timeoutMsg: 'Products page not loaded after 10 seconds'
            });
    
            expect(await $('//android.widget.TextView[@text="PRODUCTS"]').isDisplayed()).toBe(true);
        } catch (error) {
            console.error(`Login validation failed: ${error.message}`);
            expect(false).toBe(true);
        }
    }
    
}

module.exports = new LoginPage();
