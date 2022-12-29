import { randomUserPassword, randomUserName, randomUserLastName } from '../support/consts/user-consts';
import { randomAccountNumber, randomRoutingNumber, randomBankName } from '../support/consts/bank-consts';
import { MainPage } from '../pages/main-page';

const mainPage = new MainPage();

describe('Registration', function () {
  it('Correct registration', () => {
    cy.register(randomUserName, randomUserLastName, randomUserPassword, randomUserPassword);
    cy.login(randomUserName, randomUserPassword);
    mainPage.fillOnboardingForm(randomBankName(), randomRoutingNumber, randomAccountNumber);
    mainPage.isUserLoggedIn(randomUserName, randomUserLastName);
  });

  it('Incorrect registration', () => {
    cy.register(randomUserName, randomUserLastName, randomUserPassword, randomUserPassword + '1');
    cy.get('#confirmPassword-helper-text').should('have.text', 'Password does not match');
  });
});
