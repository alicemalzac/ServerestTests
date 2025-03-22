import SearchPage from '../support/page-objects/SearchPage';

describe('Product Search Tests with Login', () => {
    beforeEach(() => {
        let userData = {};
        SearchPage.visit();
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    });

    it('Should find a product successfully', () => {
        SearchPage.login(userData.email, userData.password);
        const productName = 'Iphone 14 Pro'; 
        SearchPage.searchProduct(productName);
        SearchPage.verifyProductResults(productName);
    });
});
