
describe("User can play RPS by clicking on a button", () => {
    describe('when computer picks rock', () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000", {
        })
      })
      it('user picks rock equals a draw', () => {
        cy.get("#rock").click();
      });
      it('user picks scissors equals a computer win', () => {
        cy.get("#scissors").click();
      });
      it('user picks paper equals a user win', () => {
        cy.get("#paper").click();
      });
    });
  });