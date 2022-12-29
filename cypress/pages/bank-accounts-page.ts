export class BankAccountPage {
  createNewBankAccount(accountName: string, routingNumber: string, accountNumber: string) {
    cy.get('a[data-test="bankaccount-new"]').click();
    cy.get('#bankaccount-bankName-input').type(accountName);
    cy.get('#bankaccount-routingNumber-input').type(routingNumber);
    cy.get('#bankaccount-accountNumber-input').type(accountNumber);
    cy.get('button[data-test="bankaccount-submit"]').click();
  }
  deleteBankAccount(accountName: string, routingNumber: string, accountNumber: string) {
    this.createNewBankAccount(accountName, routingNumber, accountNumber);
    cy.contains(accountName).parentsUntil('li').find('button[data-test="bankaccount-delete"]').click();
    cy.contains(accountName + ' (Deleted)').should('exist');
  }
}
