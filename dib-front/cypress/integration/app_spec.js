describe("dib front", () => {

    beforeEach(() => {
        cy.fixture("users/testuser1").as("testi1");
        cy.fixture("models/link").as("link");
    });

    it("Shows welcoming text", () => {
        cy.visit("/");
        cy.get("h1")
            .should("have.text", "New era of front pages is here!");
    });

    it("Should be able to login: testi1", function() {
        cy.visit("/login");

        cy
        .get('input[name="username"]')
        .type(this.testi1.username)
        .should("have.value", this.testi1.username);

        cy
        .get('input[name="password"]')
        .type(this.testi1.password)
        .should("have.value", this.testi1.password);

        cy.get("form").submit();

        cy.location("pathname").should("eq", "/dashboard");
    });

    it("Should be able to create a new link: testi1", function(){
        cy.visit("/create");

        cy
        .get('input[name="name"]')
        .type(this.link.name)
        .should("have.value", this.link.name);

        cy
        .get('input[name="description"]')
        .type(this.link.description)
        .should("have.value", this.link.description);

        cy
        .get('input[name="url"]')
        .type(this.link.url)
        .should("have.value", this.link.url);

        cy.get("form").submit();

        cy.location("pathname").should("eq", "/dashboard");
    });

    it("Should be able to see published link.", function() {
        cy.visit("/dashboard");

        cy
        .get(".ant-card-actions")
        .contains("span")
        .click();
    })
});