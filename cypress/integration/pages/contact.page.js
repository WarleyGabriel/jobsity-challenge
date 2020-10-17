/// <reference types="Cypress" />

class ContactPage {
  get subjectContact() {
    return cy.get("#id_contact");
  }

  get order() {
    return cy.get("#id_order");
  }

  get message() {
    return cy.get("#message");
  }

  get buttonSubmitMessage() {
    return cy.get("#submitMessage");
  }

  get successMessage() {
    return cy.get(".alert.alert-success");
  }

  get inputFile() {
    return cy.get("#fileUpload");
  }

  get email() {
    return cy.get("#email");
  }
}

export const contactPage = new ContactPage();
