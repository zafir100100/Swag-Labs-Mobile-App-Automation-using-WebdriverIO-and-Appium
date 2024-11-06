const { expect, browser } = require('@wdio/globals');

class ProductsPage {
    get btnFilter() {
        return $('~test-Modal Selector Button');
    }

    get btnCart() {
        return $('~test-Cart');
    }

    getFilterOption(filterOptionText) {
        return $(`//android.widget.TextView[@text='${filterOptionText}']`);
    }

    async clickFilterButton() {
        await this.btnFilter.click();
    }

    async selectFilterOption() {
        const filterOptionText = "Cancel";
        const filterOption = await this.getFilterOption(filterOptionText);
        await browser.waitUntil(async () => await filterOption.isDisplayed(), {
            timeout: 10000,
            timeoutMsg: `${filterOptionText} option not displayed after 10 seconds`
        });
        await filterOption.click();
    }

    get products() {
        return $$('~test-Item');
    }

    async validateFirstProduct() {
        await browser.waitUntil(async () => {
            const productList = await this.products;
            return productList.length > 0;
        }, {
            timeout: 10000,
            timeoutMsg: 'Products did not load within 10 seconds'
        });

        const expectedProductName = "Sauce Labs Fleece Jacket";
        let productFound = 0;

        const productList = await this.products;
        // const productCount = productList.length;
        // console.log(`printing products`);
        // console.log(productCount);

        for (let product of productList) {
            if (productFound == 1) {
                break;
            }

            product.scrollIntoView({ block: 'start' });

            const productTitleGroup = await product.$("//*[@content-desc='test-Item title']");
            const productTitle = await productTitleGroup.getText();

            const productPriceGroup = await product.$("//*[@content-desc='test-Price']");
            const productPrice = await productPriceGroup.getText();

            if (productTitle === expectedProductName) {
                productFound += 1;
                await productTitleGroup.click();
                await productTitleGroup.waitForDisplayed({ timeout: 5000, reverse: true });
    
                const productAddToCartGroup = await $("//*[@text='ADD TO CART']");
                await productAddToCartGroup.waitForDisplayed({ timeout: 5000 });
                await productAddToCartGroup.click();
    
                const productRemoveGroup = await $("//android.widget.TextView[@text='REMOVE']");
                await productRemoveGroup.waitForDisplayed({ timeout: 5000 });
                const productRemoveButtonText = await productRemoveGroup.getText();
                expect(productRemoveButtonText.toLowerCase()).toContain('remove');
    
                const backToProductsGroup = await $("//android.widget.TextView[@text='BACK TO PRODUCTS']");
                await backToProductsGroup.waitForDisplayed({ timeout: 5000 });
                await backToProductsGroup.click();
                await backToProductsGroup.waitForDisplayed({ timeout: 10000, reverse: true });

                return { name: productTitle, price: productPrice};
            }
        }
    }

    async validateSecondProduct() {
        await browser.waitUntil(async () => {
            const productList = await this.products;
            return productList.length > 0;
        }, {
            timeout: 10000,
            timeoutMsg: 'Products did not load within 10 seconds'
        });

        const expectedProductName = "Sauce Labs Bike Light";
        let productFound = 0;

        const productList = await this.products;
        // const productCount = productList.length;
        // console.log(`printing products`);
        // console.log(productCount);

        for (let product of productList) {
            if (productFound == 1) {
                break;
            }

            product.scrollIntoView({ block: 'start' });

            const productTitleGroup = await product.$("//*[@content-desc='test-Item title']");
            const productTitle = await productTitleGroup.getText();

            const productPriceGroup = await product.$("//*[@content-desc='test-Price']");
            const productPrice = await productPriceGroup.getText();

            if (productTitle === expectedProductName) {
                productFound += 1;
                await productTitleGroup.click();
                await productTitleGroup.waitForDisplayed({ timeout: 5000, reverse: true });

                const productNameGroup = await $(`//android.widget.TextView[@text='${productTitle}']`);
                await productNameGroup.waitForDisplayed({ timeout: 5000 });
                const productNameGroupText = await productNameGroup.getText();
                expect(productNameGroupText).toContain(productTitle);

                const productPriceGroup = await $(`//android.widget.TextView[@text='${productPrice}']`);
                await productPriceGroup.waitForDisplayed({ timeout: 5000 });
                const productPriceGroupText = await productPriceGroup.getText();
                expect(productPriceGroupText).toContain(productPrice);
    
                const productAddToCartGroup = await $("//*[@text='ADD TO CART']");
                await productAddToCartGroup.waitForDisplayed({ timeout: 5000 });
                await productAddToCartGroup.click();

                const cartItemCountGroup = await $("//*[@text='2']");
                await productNameGroup.waitForDisplayed({ timeout: 5000 });
                const cartItemCount = await cartItemCountGroup.getText();
                expect(cartItemCount).toEqual("2");

                await this.btnCart.click();

                return { name: productTitle, price: productPrice};
            }
        }
    }
}

module.exports = new ProductsPage();
