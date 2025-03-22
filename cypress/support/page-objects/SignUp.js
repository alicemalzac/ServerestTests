class SignupPage {
    visit() {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }

    enterName(name) {
        cy.get('[data-testid="nome"]').type(name);
    }

    enterEmail(email) {
        cy.get('[data-testid="email"]').type(email);
    }

    enterPassword(password) {
        cy.get('[data-testid="password"]').type(password);
    }

    clickSignup() {
        cy.get('[data-testid="cadastrar"]').click();
    }

    verifySuccessfulSignup() {
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }
}

export default new SignupPage();
