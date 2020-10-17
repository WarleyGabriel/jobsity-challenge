import { contactPage } from "../pages/contact.page";
import { Constants } from "../constants";
import Chance from "chance";

const chance = new Chance();

When(/^I send a message with a document$/, () => {
  contactPage.subjectContact.select("Customer service");
  contactPage.email.type(chance.email());
  contactPage.order.type(chance.integer({ min: 1, max: 10 }));

  contactPage.inputFile.attachFile("file.pdf");

  contactPage.message.type(chance.paragraph());
  contactPage.buttonSubmitMessage.click();
});

Then(/^the system shows feedback that the message was sent$/, () => {
  contactPage.successMessage.should(
    "have.text",
    Constants.FEEDBACK_MESSAGE_SENT
  );
});
