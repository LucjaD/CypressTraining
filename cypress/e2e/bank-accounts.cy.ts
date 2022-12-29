import { standardUserPassword, standardUserName } from '../support/consts/user-consts';
import { randomAccountNumber, randomRoutingNumber, randomBankName } from '../support/consts/bank-consts';
import { BankAccountPage } from '../pages/bank-accounts-page';

const bankAccountPage = new BankAccountPage();

describe('Bank account', function () {
  this.beforeEach(() => {
    cy.login(standardUserName, standardUserPassword);
  });
  it('Create new bank account', () => {
    cy.contains('Bank Accounts').click();
    bankAccountPage.createNewBankAccount(randomBankName(), randomRoutingNumber, randomAccountNumber);
  });

  it('Delete bank account', () => {
    cy.contains('Bank Accounts').click();
    bankAccountPage.deleteBankAccount(randomBankName(), randomRoutingNumber, randomAccountNumber);
  });
});
