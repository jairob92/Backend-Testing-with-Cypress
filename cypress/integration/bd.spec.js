describe("Pruebas a base de datos", () => {
after(() => {
    cy.task("queryDb", "DELETE FROM persona");
  });
    it("Insert", function () {
        cy.task("queryDb", "INSERT INTO persona (nombre,apellido,telefono) VALUES ('Jairo','Bermudez','31115287')").then((result) => {
          cy.log(result);
          expect(result.affectedRows).to.eq(1)
          cy.wrap(result.insertId).as('id')
        });
      });
    it("Select para comprobar la prueba pasada", function () {
      cy.task("queryDb", `SELECT * FROM persona where idpersona=${this.id}`).then((result) => {
        cy.log(result);
        expect(result[0].nombre).to.eq("Jairo");
        expect(result[0].apellido).to.eq("Bermudez");
        expect(result[0].telefono).to.eq("31115287");
      });
    });
    it("Delete para borrar lo que se hizo en los test pasados", function () {
        cy.task("queryDb", `DELETE FROM persona WHERE idpersona= ${this.id}`).then(
          (result) => {
            cy.log(result);
            expect(result.affectedRows).to.eq(1);
            expect(result.serverStatus).to.eq(2);
        });
      });
    
  });