import { RegistrationPage } from '../../pages/registration-page';

const registerPage = new RegistrationPage();

Cypress.Commands.add('register', (name: string, lastName: string, password: string, confirmPassword: string) => {
  cy.visit('/signup');
  registerPage.enterName(name, lastName);
  registerPage.enterPassword(password, confirmPassword);
  registerPage.clickRegisterButton();
});
