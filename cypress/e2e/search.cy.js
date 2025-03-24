import SearchPage from '../support/page-objects/SearchPage';

describe('Product Search Tests with Login', () => {
    let userData = {};
    beforeEach(() => {
        SearchPage.visit();
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    });

    it('Should find a product successfully', () => {
        SearchPage.login(userData.email, userData.password);
        const productName = 'Samsung 60 polegadas'; 
        SearchPage.searchProduct(productName);
        SearchPage.verifyProductResults(productName);
    });
});
