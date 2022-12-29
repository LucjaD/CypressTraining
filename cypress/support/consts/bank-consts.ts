import { faker } from '@faker-js/faker';

export const standardUserPassword = 'password';
export const standardUserName = 'John';
export const standardUserLastName = 'Smith';
function randomBankName() {
  return faker.finance.accountName();
}
export { randomBankName };
export const randomRoutingNumber = faker.finance.routingNumber();
export const randomAccountNumber = faker.finance.account(10);
