// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', () =>{
    const newUser = {
        nome: 'Usuário Teste',
        email: `usuario${Date.now()}@email.com`, 
        password: 'senha123',
        administrador: 'true'
    };

    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: newUser
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');

        cy.writeFile('cypress/fixtures/backendData.json', {
            email: newUser.email,
            password: newUser.password,
            id: response.body._id
        });
    });
})

Cypress.Commands.add('loginWithStoredUser', () => {
    cy.fixture('backendData').then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: user.email,
                password: user.password
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('authorization');

            const token = response.body.authorization;
            cy.writeFile('cypress/fixtures/token.json', { token });
        });
    });
});

Cypress.Commands.add('createProduct', () => {
    cy.fixture('token').then((data) => {
        const uniqueProductName = `Produto de teste ${Date.now()}`;
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: { Authorization: data.token },
            body: {
                nome: uniqueProductName,
                preco: 99,
                descricao: 'Produto de testes',
                quantidade: 30
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        });
    });
})


