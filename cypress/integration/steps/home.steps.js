import { homePage } from "../pages/home.page";
import { Constants } from "../constants";

Given(/^I access the home page$/, () => {
  cy.visit("/");
});

When(/^I click to access the contact page$/, () => {
  homePage.contactLink.click();
});

When(/^I search for products by typing a keyword$/, () => {
  homePage.inputSearchProducts.type(Constants.PRODUCT_NAME);
  homePage.buttonSearch.click();
});

Then(/^the system shows the page visually correct$/, () => {
  cy.document().toMatchImageSnapshot();
});
