/// <reference types="cypress" /> 
                    // REFERENCJA ABY MIEĆ DOSTĘP DO PODPOWIEDZI CYPRESS
describe("Mój pierwszy test automatyczny", () => {              // OPIS
    it("Otworzenie strony google.com", () => {          // OPIS
        cy.visit("https://google.com")                  // ODWIEDŹ
    })
})              