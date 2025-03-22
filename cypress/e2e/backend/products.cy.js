describe('Product API Tests', () => {
    it('Should create a new product using stored token', () => {
        cy.fixture('token').then((data) => {
            const uniqueProductName = `Produto Automação ${Date.now()}`;
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
    });
});
