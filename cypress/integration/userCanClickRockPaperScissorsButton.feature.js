
describe('User can play RPS by clicking on a button', () => {
    beforeEach(() => {
        cy.visit('/');
        })

        it('User can click on button', () => {
        cy.get("p#RPS-message").should("contain", "You chose");
        });
    });
