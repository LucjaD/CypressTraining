declare namespace Cypress {
  interface Chainable {
    login(name: string, password: string): Chainable;
    register(name: string, lastName: string, password: string, confirmPassword: string): Chainable;
  }
}
