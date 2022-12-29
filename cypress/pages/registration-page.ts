export class RegistrationPage {
  enterName(name: string, lastName: string) {
    cy.get('#firstName').type(name);
    cy.get('#lastName').type(lastName);
    cy.get('#username').type(name);
  }

  enterPassword(password: string, confirmPassword: string) {
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(confirmPassword);
  }

  clickRegisterButton() {
    cy.get('button[data-test="signup-submit"]').then(($button) => {
      if (!$button.prop('disabled')) {
        cy.get('button[data-test="signup-submit"]').click();
      }
    });
  }
}
