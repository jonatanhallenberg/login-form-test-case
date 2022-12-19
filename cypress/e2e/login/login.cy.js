describe("login page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
    })

    it("should show invalid message when not entering username and password", () => {
        cy.getByTestId("login-button").click();
        cy.getByTestId("result-message").contains("Du måste fylla in användarnamn och lösenord!");
    })

    it("should show correct message when typing wrong credentials", () => {
        cy.getByTestId("login-form-username").type("abc");
        cy.getByTestId("login-form-password").type("123");
        cy.getByTestId("login-button").click();
        cy.getByTestId("result-message").contains("Du har angett fel användarnamn eller lösenord!");        
    })

    it("should show logged in message when typing correct credentials", () => { 
        cy.getByTestId("login-form-username").type("jonatan");
        cy.getByTestId("login-form-password").type("hejsan123");
        cy.getByTestId("login-button").click();
        cy.getByTestId("result-message").contains("Du är inloggad!");        
    })

})