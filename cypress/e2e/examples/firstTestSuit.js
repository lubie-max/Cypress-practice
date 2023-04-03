/// <reference types="Cypress" />

describe("testing a blog app", () => {
  it("checking my site", () => {
    // cy.log('Hi there')
    cy.visit("https://geekblogs.netlify.app/");

    //validating url
    cy.url().should("include", "geekblogs");

    //clicking on post
    cy.wait(6000)
    
    if (cy.get(':nth-child(1) > .card-img-top').should('exist')) {
      
      cy.get(':nth-child(1) > .card-img-top').click()
      
      cy.get('h3').then((elm)=>{
        let data =elm.text()
        expect(data.includes("Lubies data")).to.be.true
      })
      
      
      
    cy.go('back')

    cy.get('.mx-3').click()
    cy.get('#formBasicEmail').type("ls@mail.com")
    cy.get('#formBasicPassword').type("1234")

    cy.get('.btn-primary').click()

  }
else{
  cy.log('waiting')
}
    
  });
});
