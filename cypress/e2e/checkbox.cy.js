/// <reference types ="cypress" />
import Base from "../pages/Base";
import HomeJs from "../pages/HomeJs,js";
import Women from "../pages/Women";

describe("Test związany z zaznaczeniem checkboxa", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        HomeJs.womenTab.click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Zaznaczenie checkboxa w zakładce Women", () => {
        Women.checkTops();
        Women.topsCheckbox.should("be.checked")
 //       cy.get("#layered_category_4").should("be.checked");     //not.be.checked
        Women.chechDresses();
        Women.checkSize();
    })
})