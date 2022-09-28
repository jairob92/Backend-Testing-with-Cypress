/// <reference types ="Cypress" />
describe('test status',()=>{
    it('Debe validar status code 200',()=>{
        cy.request('employees').its('status').should('eq',200)
    })
    it('Debe validar status code 404',()=>{
        cy.request({url:'employees/6',failOnStatusCode: false}).its('status').should('eq',404)
    })
})