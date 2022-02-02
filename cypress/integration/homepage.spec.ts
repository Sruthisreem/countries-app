describe("Initial Home page", () => {
  it("It will render the homepage", () => {
    cy.visit("http://localhost:3000/");
  });

  describe("Click through a country", () => {
    it("Click the Aruba country and redirect to details page then go back", () => {
      cy.scrollTo(0, 0);
      cy.findByTestId("country-Aruba").click();
      cy.findByTestId("bckbtn").click();
      cy.scrollTo(0, 0);
    });
  });

  describe("Refresh Page", () => {
    it("Click refresh", () => {
      cy.reload();
    });
  });
});
