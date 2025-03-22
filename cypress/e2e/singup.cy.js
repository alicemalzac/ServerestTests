import SignupPage from '../support/page-objects/SignUpPage';

describe('User Signup Tests', () => {
    let userData = {};

    beforeEach(() => {
        SignupPage.visit();
    });

    it('Should successfully sign up a new user', () => {
        const userData = { 
            name: 'Alice',
            email: `alice${Date.now()}@example.com`,
            password: 'password123'
        };

        SignupPage.enterName(userData.name);
        SignupPage.enterEmail(userData.email);
        SignupPage.enterPassword(userData.password);
        SignupPage.clickSignup();
        SignupPage.verifySuccessfulSignup();

        cy.writeFile('cypress/fixtures/userData.json', userData);
    });
});
