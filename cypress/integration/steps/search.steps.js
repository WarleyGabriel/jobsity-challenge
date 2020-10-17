import { searchPage } from "../pages/search.page";
import { Constants } from "../constants";

Then(
  /^the system shows only a product that have the keyword in the title$/,
  () => {
    searchPage.productsName.should("contain.text", Constants.PRODUCT_NAME);
  }
);

Then(/^the system shows only (\d) product on the page$/, (count) => {
  searchPage.countElements.should(
    "contain.text",
    `Showing ${count} - ${count} of ${count} item`
  );
});
