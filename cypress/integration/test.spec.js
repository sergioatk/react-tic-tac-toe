/// <reference types="cypress" />

const URL = 'http://localhost:3000/';

describe('Test Tic-Tac-Toe game', () => {
    it('loads homepage', () => {
        cy.visit(URL);
        cy.contains('Tic-Tac-Toe');

    });

    it('makes sure winner card does not exist', () => {
        cy.get('.winner-card').should('not.exist');
    });

    it('assert squares length is 9', () => {
        cy.get('.board').find('.square').should('have.length', 9);
    });

})
