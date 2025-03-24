describe('Product API Tests', () => {
    beforeEach(() => {
        cy.createUser();
    });
    it('Should create a new product using stored token', () => {
        cy.createProduct();
    });
});


