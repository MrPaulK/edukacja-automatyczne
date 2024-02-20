/// <reference types ="cypress" />

describe ("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakładkę Contact us ", () => {
        cy.visit("/");                          // weźmie base url
        cy.get(`a[title="Contact us"]`).click();                               // #contact-link > a też zadziała
    })
})