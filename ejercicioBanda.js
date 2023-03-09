let baterista = 0;
class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if (integranteNuevo.instrumento === "Bateria") {
      if (baterista < 1) {
        baterista = 1,
        this.integrantes.push(integranteNuevo);
      }
    }else{
        this.integrantes.push(integranteNuevo);
    }

  }
}

//Crear clase Integrante
class Integrante {
  constructor({
    nombre,
    instrumento,
  })
  {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }

}


// export {
//   Banda,
//   Integrante,
//   baterista,
// }
