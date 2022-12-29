export class MainPage {
  isUserLoggedIn(standardUserName: string, standardUserLastName: string) {
    cy.get('h6[data-test="sidenav-user-full-name"]').should('have.text', `${standardUserName + ' ' + standardUserLastName[0]}`);
    cy.get('div[data-test="sidenav-signout"]').should('be.visible');
  }

  fillOnboardingForm(bankName: string, routingNumber: string, accountNumber: string) {
    cy.get('button[data-test="user-onboarding-next"]').click();
    cy.get('#bankaccount-bankName-input').type(bankName);
    cy.get('#bankaccount-routingNumber-input').type(routingNumber);
    cy.get('#bankaccount-accountNumber-input').type(accountNumber);
    cy.get('button[data-test="bankaccount-submit"]').click();
    cy.get('button[data-test="user-onboarding-next"]').click();
  }

  navigateToNewTransactionPage() {
    cy.get('a[data-test="nav-top-new-transaction"]').first().click();
  }
}
