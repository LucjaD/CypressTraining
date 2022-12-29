import {
  standardUserPassword,
  randomUserName,
  randomUserPassword,
  standardUserName,
  standardUserLastName,
} from '../support/consts/user-consts';
import { MainPage } from '../pages/main-page';

const mainPage = new MainPage();

describe('Logging', function () {
  it('Correct logging in', () => {
    cy.login(standardUserName, standardUserPassword);
    mainPage.isUserLoggedIn(standardUserName, standardUserLastName);
  });

  it('Incorrect logging in', () => {
    cy.login(randomUserName, randomUserPassword);
    cy.get('div[data-test="signin-error"]').should('have.text', 'Username or password is invalid');
  });
});
