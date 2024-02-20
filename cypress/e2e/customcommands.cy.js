/// <reference types ="cypress" />
import {login, passwd} from "../fixtures/loginData.json"
/*
import Base from "../pages/Base";
import HomeJs from "../pages/HomeJs,js";
import Women from "../pages/Women";
*/
describe("Custom Commands", () => {
    it("Logowanie do strony automationspractice", () => {
        cy.login(login, passwd );
    })
})
