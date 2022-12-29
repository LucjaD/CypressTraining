import { faker } from '@faker-js/faker';

export const standardUserPassword = 'password';
export const standardUserName = 'John';
export const standardUserLastName = 'Smith';

export const randomUserPassword = faker.random.alphaNumeric(5);
export const randomUserName = faker.name.firstName();
export const randomUserLastName = faker.name.lastName();
