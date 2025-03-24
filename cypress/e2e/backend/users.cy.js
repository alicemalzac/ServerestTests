describe('User Registration API Tests', () => {
    it('Should create a new user', () => {
        cy.createUser();
    });

    it('Should log in using stored user data', () => {
        cy.loginWithStoredUser();
      });

});
