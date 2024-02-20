class ResultPage {
    get searchAlert() {
        return cy.get("p.alert-warning")
    }
}

export default new ResultPage();