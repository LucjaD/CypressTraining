import { standardUserPassword, standardUserName } from '../support/consts/user-consts';
import { MainPage } from '../pages/main-page';
import { NewTransactionPage } from '../pages/new-transaction-page';

const mainPage = new MainPage();
const newTransactionPage = new NewTransactionPage();

describe('Transactions', function () {
  this.beforeEach(() => {
    cy.login(standardUserName, standardUserPassword);
  });

  it('Creating new payment', () => {
    mainPage.navigateToNewTransactionPage();
    newTransactionPage.createNewTransaction('Arely Kertzmann', 12, 'shopping', 'payment');
  });

  it('Creating new request', () => {
    mainPage.navigateToNewTransactionPage();
    newTransactionPage.createNewTransaction('Arely Kertzmann', 12, 'shopping', 'request');
  });
});
