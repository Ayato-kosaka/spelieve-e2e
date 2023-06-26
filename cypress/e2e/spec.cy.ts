describe("CPA001HelloSpelieve", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("onPress_createItineraryButton", () => {
    // take a snapshot before clicking the button
    cy.get('[data-testid="createItineraryButton"]');
    cy.screenshot("onPress_createItineraryButton-before");

    // Click onPress
    cy.get('[data-testid="createItineraryButton"]').click();

    // Verify the URL
    cy.url().should("include", "/ItineraryEdit");

    // take a snapshot after clicking the button
    cy.get('[data-testid="planPressable"]');
    cy.screenshot("onPress_createItineraryButton-after");
  });
});
describe("IPA001ItineraryEdit", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="createItineraryButton"]').click();
  });
  it("onPress_planPressable", () => {
    // take a snapshot before clicking the button
    cy.get('[data-testid="planPressable"]');
    cy.screenshot("onPress_planPressable-before");

    // Click onPress
    cy.get('[data-testid="planPressable"]').click();

    // Verify the URL
    cy.url().should("include", "/EditPlan");

    // take a snapshot after clicking the button
    cy.get('[data-testid="planThumbnailPressable"]');
    cy.screenshot("onPress_planPressable-after");
  });
});
