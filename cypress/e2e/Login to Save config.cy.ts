describe("Login to Save config", () => {
  afterEach(() => {
    cy.get("[data-test='profileLink']").click();
   cy.get("[data-test='logoutButton']").click();
   cy.clearAllCookies
   cy.wait(5000);
  });
  it("tests Login to Save config", () => {
    cy.viewport(1512, 1512);
    cy.visit("https://s.activate.vts.com/");
    cy.get("[data-test='shared\\.identifyUser\\.loginEmail\\.emailLabel']").click();
    cy.get("[data-test='shared\\.identifyUser\\.loginEmail\\.emailLabel']").type("vikram.mishra+super@vts.com");
    cy.get("div.pageRWuop > div > div > div span").click();
    cy.origin ("https://auth-stg.vts.com/", ()=>{
      cy.get("#password").type("Password@123");
      cy.get("button._button-login-password").click();
    })  
    cy.wait(5000);
    cy.url().should('eq', 'https://s.activate.vts.com/l/home');
    cy.get(".clickableAreaItyVD").click();
    cy.get("input[placeholder='Search']").click();
    cy.get("input").type("genea test");
    cy.wait(4000);
    cy.get("[data-test='circleListView']").contains("Genea Test Property-DNT").scrollIntoView().should('be.visible').click();
    cy.get("[data-test='circleListView']").find("div[class='textWrapperJ_qpi'] span[class='mK6xlP']").invoke("text").should('eq',"Genea Test Property-DNT");
    cy.get(".clickableAreaItyVD").click();
    cy.wait(2000);
    cy.get("a[href='/l/channel/genea-test-property-dnt/admin']").should("have.text", "Switch to Admin on Genea Test Property-DNT").click();
    cy.get("[data-test='Property Settings']").click();
    cy.get("a[href='/l/channel/genea-test-property-dnt/admin/integrations']").should("have.text","Integrations").click();
    cy.get("[data-test='integrationsTable']").contains("Access Management").click();
    cy.get("[data-test='buttonLoadMetadataFields']").contains("Load settings").click();
    cy.wait(5000);
    cy.get("[data-test='Location'] [data-test='dropdown']").click();
    cy.get("[data-test='Location'] [class='mK6xlP']").type("Rise Building - Location 1");
    cy.get("#react-select-9-option-0", { timeout: 5000 })  // wait for option
    .should('be.visible')
    .click();
    cy.get("[data-test='Card Formats']").within(() => {
    cy.get("[data-test='dropdown']").click();
    cy.get("input[type='text']").type("Genea");
    cy.wait(2000);
    cy.contains("div", "Activate - Genea CF")
    .should('be.visible')
    .click();
    }); 
    cy.get("[data-test='Visitor management'] [data-test='toggle-value']").then(($toggle) => {
      const isChecked = $toggle.attr('data-toggle-status') === 'true';
      if(isChecked){
    cy.wrap($toggle).click();
      }
    });
    cy.get("[data-test='Visitor management'] [data-test='toggle-value']").should('have.attr', 'data-toggle-status', 'false');
    cy.get("[data-test='createIntegration']").click();
    cy.get("[data-test='toast']").should("be.visible").contains("AccessManagement updated.");

    
  });
});
