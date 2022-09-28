/// <reference types ="Cypress" />
describe('probando headers',()=>{

    it('Validar el header y el content type',()=>{
        cy.request('employees').its('headers').its('content-type').should('include','application/json')
    })
})