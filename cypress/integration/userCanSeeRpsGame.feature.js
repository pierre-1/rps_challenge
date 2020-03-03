describe('RPS main page', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    
    it('User can access main page',() => {

      cy.get('#title').should('contain', 'Play Rock Paper Scissors!');

    })
  })