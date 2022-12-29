export class NewTransactionPage {
  createNewTransaction(name: string, amount: number, description: string, type: string) {
    cy.contains(name).click({ force: true });
    cy.get('#amount').type(amount.toString());
    cy.get('#transaction-create-description-input').type(description);

    switch (type.toLowerCase()) {
      case 'payment': {
        cy.get('button[data-test="transaction-create-submit-payment"]').click();
        break;
      }
      case 'request': {
        cy.get('button[data-test="transaction-create-submit-request"]').click();
        break;
      }
      default: {
        cy.get('button[data-test="transaction-create-submit-payment"]').click();
        break;
      }
    }

    cy.get('div[data-test="alert-bar-success"]').should('be.visible');
  }
}
