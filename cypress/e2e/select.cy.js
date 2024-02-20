/// <reference types ="cypress" />

describe("Test związany z wybieraniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Wybranie filtra In stock", () => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value","quantity:desc");
        cy.wait(3000);
    })

    it("Wybranie filtra Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("Product Name: A to Z");
        cy.get("#selectProductSort").should("have.value","name:asc");
        cy.wait(3000);
    })

    it("Wybranie filtra Reference: Lowest First", () => {
        cy.get("#selectProductSort").select("reference:asc"); 
        cy.get("#selectProductSort").should("have.value","reference:asc");
        cy.wait(3000);
    })
})