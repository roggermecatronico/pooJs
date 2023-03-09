function literal(){
    // const rogger1 = {
// nombre: "Rogger",
// userName: 'rogger09',
// point: 100,
// socialMedia: {
//     twitter: 'rogger09',
//     facebook: 'rogger09',
//     instagram: 'rogger09',
// },

// approvedCourses:[
//     'Curso definitivo de html'
// ],
// learningPaths:[
//     {
//         name: 'Escuela de desarrollo web',
//         courses: [ 'Curso definitivo de html',
//             'Curso definitivo de html'],
//     },
//     {
//         name: 'Escuela de js web',
//         courses: [ 'Curso definitivo de html y js',
//             'Curso definitivo de css',
//         ],
//     },

// ],
// };
}
// Platzi tiene:
// Profesores : nombre, apellido, email, cursos creados, clases, edad, profesion, inicio de trabajo, estado civil, genero, residencia
// Estudiantes : nombre, apellido, email, cursos iniciados, cursos por tomar, cursos aprobados, rutas iniciados, rutas por tomar, rutas aprobados clases, edad, profesion, inicio de subcripcion, estado civil, genero, residencia
// Clases : name, id, profesores, tecnologias usadas, tiempo de duracion, comentarios, recursos,
// Modulos : name, clases, id,
// Cursos : name, modulos, id , valoracion, numero de estudiantes aprobados,calificacion del curso
// Rutas de aprendizaje: cursos, areas, name, numero de estudiantes, numero de estudiantes aprobados, calificacion
// Comentarios : usuario, estado(pregunta o aporte), 
// Secciones en Vivo: nombre, viewers, area, participantes, Hora de inicio
// escuelas: cursos, area, name , numero de estudiantes, numero de estudiantes aprobados, calificacion
// rutas personalizadas: cursos, areas, name,
// post: id, Usuario, comentarios, veces visitado

class Student{//nueva clase
    constructor({
        name, 
        lastName, 
        age = undefined, 
        email, 
        profesion = undefined,
        inicioDeSubcribcion,
        estadoCivil = undefined,
        genero = undefined,
        residencia = undefined,
        twitter =  undefined,
        facebook =  undefined,
        instagram =  undefined,
        cursosAprobados = [],
        cursosIniciados = [],
        cursosPorTomar = [],
        learningPaths = [],
    })
    {
    this.name = name; 
    this.lastName = lastName; 
    this.age = age; 
    this.email = email; 
    this.socialMedia = { 
        twitter : twitter,
        facebook,
        instagram,    
    };    
    this.cursosAprobados  = cursosAprobados;
    this.cursosIniciados  = cursosIniciados;
    this.cursosPorTomar  = cursosPorTomar;
    this.learningPaths  = learningPaths;
    this.profesion = profesion;
    this.inicioDeSubcribcion = inicioDeSubcribcion;
    this.estadoCivil = estadoCivil;
    this.genero = genero;
    this.residencia = residencia;
        
    }//Metodo
    aprobarCurso(nuevocursito){
        this.cursosAprobados.push(nuevocursito)
    }
    cursoIniciado(nuevocursito){
        this.cursosIniciado.push(nuevocursito)
    }
    cursoPorTomar(nuevocursito){
        this.cursosPorTomar.push(nuevocursito)
    }
    learningPath(nuevocursito){
        this.learningPaths.push(nuevocursito)
    }
}
class Profesor{//nueva clase
    
    constructor({
        name, 
        lastName, 
        age = undefined, 
        email, 
        profesion = undefined,
        inicioDeTrabajo,
        estadoCivil = undefined,
        genero = undefined,
        residencia = undefined,
        twitter =  undefined,
        facebook =  undefined,
        instagram =  undefined,
        cursosFinalizados = [],
        cursosIniciados = [],
        cursosParticipante = [],
    })
    {
    this.name = name; 
    this.lastName = lastName; 
    this.age = age; 
    this.email = email; 
    this.socialMedia = { 
        twitter : twitter,
        facebook,
        instagram,    
    };
    this.cursosParticipante = cursosParticipante;    
    this.cursosIniciados  = cursosIniciados;
    this.cursosFinalizados  = cursosFinalizados;
    this.profesion = profesion;
    this.inicioDeTrabajo = inicioDeTrabajo;
    this.estadoCivil = estadoCivil;
    this.genero = genero;
    this.residencia = residencia;
        
    }//Metodo
    cursoFinalizado(nuevocursito){
        this.cursosFinalizados.push(nuevocursito)
    }
    cursoIniciado(nuevocursito){
        this.cursosIniciado.push(nuevocursito)
    }
    cursoParticipante(nuevocursito){
        this.cursosParticipante.push(nuevocursito)
    }
}
Profesor.prototype.agregarCursoImpartido = function(cursos){
    this.cursosParticipante.push(cursos)
}
class Clases{
    constructor({
        name,
        id,
        comentarios = [],
        profesor = [],
        tecnologiasUsadas = [],
        tiempoDeDuracion, 
        recursos = [],
    })
    {
        this.comentarios = comentarios;
        this.id = id;
        this.name = name;
        this.profesor = profesor;
        this.tecnologiasUsadas = tecnologiasUsadas;
        this.tiempoDeDuracion = tiempoDeDuracion;
        this.recursos = recursos;
    }

}
class Modulos{
    constructor({
        name,
        clases = [],
        id,
    })
    {
        this.clases = clases;
        this.name = name;
        this.id = id;
    }

}
class Courses{
    constructor({
        name,
        id,
        modulos = [],
    })
    {
        this.modulos = modulos;
        this.name = name;
        this.id = id;
    }
    numeroDeEstudianteAprobados(){
        this.numeroDeEstudianteAprobados += 1
    }
    valoracion(puntaje){
        this.valoracion = (this.valoracion+puntaje)/this.numeroDeEstudianteAprobados
    }

}
class LearningPaths{
    constructor({
        name,
        areas= [],
        cursos = [],
    })
    {
        this.cursos = cursos;
        this.name = name;
        this.areas = areas;
    }
    numeroDeEstudianteAprobados(){
        this.numeroDeEstudianteAprobados += 1
    }
    numeroDeEstudiante(){
        this.numeroDeEstudiante += 1
    }
    valoracion(puntaje){
        this.valoracion = (this.valoracion+puntaje)/this.numeroDeEstudianteAprobados
    }

}
class Id{
    constructor({
        date,
        id,
    })
    {
        this.date = date;
        this.id = id;
    }

}


//cuidar el orden de como mandamos a llamar a las const 
const pbid1 = new Id({
    date: 080323,
    id: 'pbfv1',
})
const freddyVega = new Profesor({
    name: 'Freddy',
    lastName: 'Vega',
    age: 25,
 })
const instalarVSC = new Clases({
    name: 'Como instalar Visual Studio Code',
    id: pbid1,
    profesor: freddyVega,
})
const introduccionpb = new Modulos({
    name: 'Introduccion a la programacion',
    clases: instalarVSC,
    profesores: freddyVega,
})
const prograBasica = new Courses({
    name: 'Programacion Basica',
    modulos: [introduccionpb]
})

const programacionWeb = new LearningPaths({
    name: 'Escuela de desarrollo web',
    cursos : [prograBasica,
    'git y guthub',
    'Html',
    'Css',]
})

const dataScience = new LearningPaths({
    cursos : [prograBasica,
    'data Science',
    'Ciencia de Datos',
    'Roles',]
})



const marcia = new Student({
    name: 'Marcia',
    lastName: 'Alvarado',
    twitter: 'Marcia',
    learningPaths: programacionWeb,
    
});
const ariana = new Student({
    name: 'Ariana',
    lastName: 'Roman',
    twitter: 'araian09',
    learningPaths: dataScience,
    
});


freddyVega.agregarCursoImpartido(prograBasica.name)
