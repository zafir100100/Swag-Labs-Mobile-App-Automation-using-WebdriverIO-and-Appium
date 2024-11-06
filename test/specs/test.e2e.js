const LoginPage = require('../pageobjects/login.page')
const ProductsPage = require('../pageobjects/products.page')

describe('Regression Test On Swag Labs Mobile App', () => {
    // it('should display locked-out error for locked-out user login attempt', async () => {
    //     await LoginPage.selectLockedOutUser();
    //     await LoginPage.submitLogin();
    //     await LoginPage.validateErrorMessage();
    // });
    it('should successfully log in with valid standard user credentials', async () => {
        await LoginPage.selectStandardUser();
        await LoginPage.submitLogin();
        await LoginPage.validateSuccessfulLogin();
    });
    it('should add product to cart and verify button change to remove', async () => {
        // await ProductsPage.clickFilterButton();
        // await ProductsPage.selectFilterOption();
        await ProductsPage.validateFirstProduct();
    });
    it('should add to cart product and verify cart badge is changed', async () => {
        await ProductsPage.validateSecondProduct();
    });
});

