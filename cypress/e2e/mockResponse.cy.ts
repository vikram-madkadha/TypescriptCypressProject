/// reference types="cypress" />
describe('Mocking API Responses using Intercept', () => {
    it('Should mock a successful API response', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
cy.intercept({
    method: 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
}, {
    statusCode: 200,
    body: [{
            "book_name": "RestAssured with Java",
            "isbn": "LSA",
            "aisle": "2303"
        }]
}).as('bookListResponse');
cy.get('button[class="btn btn-primary"]').click();
cy.wait('@bookListResponse').then(({ request, response }) => {
    if (response && response.body) {
        cy.get('tr').should('have.length', response.body.length + 1);
    } else {
        throw new Error('Response or response body is undefined');
    }
});
cy.get('p').should('have.text', 'Oops only 1 Book available');
    });
});