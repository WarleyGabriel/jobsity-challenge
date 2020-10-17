/// <reference types="Cypress" />

class SearchPage {
  get productsName() {
    return cy.get("div.product-container a.product-name");
  }

  get countElements() {
    return cy.get("div.product-count");
  }
}

export const searchPage = new SearchPage();
