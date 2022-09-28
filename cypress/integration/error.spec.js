/// <reference types ="Cypress" />
describe('Probando errores',()=>{

    it('Validar status code fallido y el mensaje de error',()=>{
        
        cy.request({url:'https://pokeapi.co/api/v2/2323', failOnStatusCode:false}).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.be.eq("Not Found")
        })

    })
    it('Validar status code fallido y el mensaje de error API Rick and Morty',()=>{
        
        cy.request({url:'https://rickandmortyapi.com/api/location/23123123', failOnStatusCode:false}).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error','Location not found')
        })

    })


})