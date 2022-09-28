
describe('Probando graphql',function(){

it('Debe hacer una consulta con graphql',()=>{
    const gqlQuery=`query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          message
          results {
            url
            name
            image
          }
        }
      }`;
      const grapthqlVariables={
        limit:20,
        offset:0,

      }
      cy.request({
        method:"POST",
        url:'https://graphql-pokeapi.graphcdn.app/',
        body:{
            query:gqlQuery,
            variables:grapthqlVariables
        }
      }).then(response=>{
        cy.log(response)
        expect(response.body.data.pokemons.results[0].name).to.equal("bulbasaur");
      })
})


})