/// <reference types="Cypress" />

class HomePage {
  get inputSearchProducts() {
    return cy.get("input.search_query");
  }

  get buttonSearch() {
    return cy.get('button[name="submit_search"]');
  }

  get contactLink() {
    return cy.get("#contact-link");
  }
}

export const homePage = new HomePage();
