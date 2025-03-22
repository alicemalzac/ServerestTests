import LoginPage from "../support/page-objects/LoginPage.js";

describe ('Login tests', ()=>{
    let userData = {};
    beforeEach(() => {
        LoginPage.visit();
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    })

    it ('Should log in with valid credentials', () => {
        LoginPage.enterEmail(userData.email);
        LoginPage.enterPassword(userData.password);
        LoginPage.clickLogin();
        LoginPage.verifySuccessfulLogin();
    })
    it ('Should not log in with invalid credentials', () => {
        LoginPage.enterEmail("fake@email.com");
        LoginPage.enterPassword(userData.password);
        LoginPage.clickLogin();
        LoginPage.verifyErrorMessage('Email e/ou senha inválidos')
    })
})