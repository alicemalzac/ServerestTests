class LoginPage {
    visit() {
        cy.visit('https://front.serverest.dev/');
    }

    enterEmail(email) {
        cy.get('[data-testid="email"]').type(email);
    }

    enterPassword(password) {
        cy.get('[data-testid="senha"]').type(password);
    }

    clickLogin() {
        cy.get('[data-testid="entrar"]').click();
    }

    verifySuccessfulLogin() {
        cy.get('[data-testid="home"]').should('be.visible');
    }

    verifyErrorMessage(message) {
        cy.contains(message).should('be.visible');  
    }
}

export default new LoginPage();
