describe("Login to Save config", () => {
  it("tests Login to Save config", () => {
    cy.viewport(1512, 329);
    cy.visit("https://s.activate.vts.com/");
    cy.get("[data-test='shared\\.identifyUser\\.loginEmail\\.emailLabel']").click();
    cy.get("[data-test='shared\\.identifyUser\\.loginEmail\\.emailLabel']").type("vikram.mishra+super@vts.com");
    cy.get("div.pageRWuop > div > div > div span").click();
    cy.origin ("https://auth-stg.vts.com/", ()=>{
      cy.get("#password").type("Password@123");
      cy.get("div.c962c3db7 > button").click();
    })  
    cy.get(".clickableAreaItyVD").click();
    cy.get("input").click();
    cy.get("input").type("genea test");
    cy.get("[data-test='channelMenu'] span.mK6xlP").click();
    cy.get("div.textWrapperJ_qpi > span").click();
    cy.get("a:nth-of-type(1) > [data-test='menu-option-switch-to-admin']").click();
    cy.get('[data-test="Property Settings"] > span').click();
    cy.get('.linktU8iv').contains('Integrations').click();
    cy.get('tbody tr td a').contains('Access Management').click();
    cy.get("#react-select-9-option-0").click();
    cy.get("div:nth-of-type(4) [data-test='dropdown'] > div > div").click();
    cy.get("#react-select-10-option-7").click();
    cy.get("div:nth-of-type(8) div.css-1wy0on6").click();
    cy.get("#react-select-11-option-7").click();
    cy.get("div:nth-of-type(25)").click();
    cy.get("[data-test='igs-tenant-0'] > div > div").click();
    cy.get("[data-test='adminPage']").click();
    cy.get("[data-test='createIntegration'] > span").click();
    cy.get("[data-test='profileLink']").click();
    cy.get("[data-test='logoutButton'] > span").click();
    cy.location("href").should("eq", "https://s.activate.vts.com/?");
  });
});
//# recorderSourceMap=BCBDBEBFBGBHAHBIAIAIBJCLBMBNBOAOBPCRBSBTBUBVBWBXBYBZBaBbBcBdBeBfBgBBhBBiBBjBBkBC
