describe('Login API Tests', () => {
  it('Should log in using stored user data', () => {
      cy.fixture('userData').then((user) => {
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

              cy.writeFile('cypress/fixtures/token.json', {
                  token: response.body.authorization
              });
          });
      });
  });
});