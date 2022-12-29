import { LoginPage } from '../../pages/login-page';

const loginPage = new LoginPage();

Cypress.Commands.add('login', (name: string, password: string) => {
  cy.visit('/signin');
  loginPage.enterUsername(name);
  loginPage.enterPassword(password);
  loginPage.clickLoginButton();
});
