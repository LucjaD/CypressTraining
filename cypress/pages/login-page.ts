export class LoginPage {
  enterUsername(name: string) {
    cy.get('#username').type(name);
  }
  enterPassword(password: string) {
    cy.get('#password').type(password);
  }
  clickLoginButton() {
    cy.get('[data-test = "signin-submit"]').click();
  }
}
