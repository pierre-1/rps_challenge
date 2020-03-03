
describe('User can play RPS by clicking on a button', () => {
    beforeEach(() => {
        cy.visit('/');
        })
        it('User can click on button', () => {

        cy.get("p#RPS-message").should(
        "contain",
        "Ready to play?"
  );
  cy.get("p#RPS-result").should("contain", "Result: Poor");   
        });
    });
