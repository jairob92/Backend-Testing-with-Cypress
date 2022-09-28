/// <reference types ="Cypress" />
describe('test body',()=>{

    it('Test #1',()=>{
        cy.request('employees/1').its('body').its('first_name').should('eq','Javier')
    })
    it('Test validando varias respuestas',()=>{
        cy.request('employees/1').then(response=>{

            expect(response.status).to.be.equal(200)
            expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8')
            expect(response.body.first_name).to.be.equal('Javier')
            expect(response.body.last_name).to.be.equal('Eschweiler')
       

        })
        cy.request('employees/1').then((response)=>{

            expect(response.body).to.be.deep.equal({
                "id": 1,
                "first_name": "Javier",
                "last_name": "Eschweiler",
                "email": "javier@platzi.com"
            })

       

        })
    })
})