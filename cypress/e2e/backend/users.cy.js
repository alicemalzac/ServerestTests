describe('User Registration API Tests', () => {
    it('Should create a new user', () => {
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

            cy.writeFile('cypress/fixtures/backendData.json', {
                email: newUser.email,
                password: newUser.password
            });
        });
    });
});
