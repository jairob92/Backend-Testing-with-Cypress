/// <reference types ="Cypress" />

describe('Probando request',()=>{
    it('Metodo POST',()=>{
        cy.request({
            url:'employees',
            method:'POST',
            body:{
                first_name: "Maria del Mar",
                last_name: "Ramirez",
                email: "MariaRamirez@sdasd.com"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("id")
            const id=response.body.id
            cy.wrap(id).as("id")
        })
    })
    it('Debe validar que se haya creado en la base de datos',()=>{
        cy.request('GET','employees').then((response)=>{
            expect(response.body[response.body.length-1].first_name).to.be.eq('Maria del Mar')
        })

    })
    it('modificar el correo de un empelado agregado',()=>{
        
        cy.request({
            url:'employees/6',
            method: 'PUT',
            body:{
                first_name:'Mariana',
                last_name:'Quijano',
                email:'prueba@prueba.com'
            }

        }).then(response=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("id")
        })
    })
    it('eliminar registro',()=>{
        
        cy.request({
            url:'employees/6',
            method: 'DELETE',
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    })
    
})