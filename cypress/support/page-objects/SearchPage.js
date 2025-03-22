class SearchPage {
    visit() {
        cy.visit('https://front.serverest.dev/home');
    }

    // Method to log in
    login(email, password) {
        cy.get('[data-testid="email"]').type(email);  
        cy.get('[data-testid="senha"]').type(password);  
        cy.get('[data-testid="entrar"]').click();  
    }

    searchProduct(productName) {
        cy.get('[data-testid="pesquisar"]').type(productName);
        cy.get('[data-testid="botaoPesquisar"]').click(); 
    }

    verifyProductResults(productName) {
        cy.get('.card-title').each(($el) => {
            cy.wrap($el).should('contain.text', productName);
        });
    }

    verifyNoResultsMessage() {
        cy.get('p')
          .should('be.visible')      // Check if the product title is visible
          .should('contain.text', 'Nenhum produto foi encontrado');
    }
}

export default new SearchPage();
