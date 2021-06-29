const URL = "http://192.168.0.131:8080"

context('Testeo Pokedex', () => {
    before(() => {
        cy.visit(URL);
    });
    describe('Chequea que el tablero muestre correctamente los pokemones', () => {
        it('Chequea que al ingresar el tablero muestre los 50 primeros pokemones', () => {
            cy.get('.pokeficha').then((fichas) =>
                fichas.each(function(i, ficha) {
                    cy.get(ficha).find(".pokenombre").should("not.deep.equal", "");
                    // cy.get(ficha).find("src").should("not.deep.equal", "");
                })
            )
        })


    });
});