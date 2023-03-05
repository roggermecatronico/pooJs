//how to create a Object?

const rogger = {//creamos un objeto literal
    name: 'Rogger',
    lastName: 'Roman',  //creamos propiedades
    age: 27,
    cursosAprobados: ['git y github profesional',
                        'programación basica',
                        'Python'
                    ],
    getInfo: function() { //creamos metodos
        return 'Name: ' + this.name + ' ' + this.lastName + ' tiene: ' + this.age + ' años';
    }

    // nuevoCurso:  function (newCourse){
    // nuevoCurso(){
    //     this.cursosAprobados.push(newCourse);
    //     console.log('Felicitaciones agregaste un nuevo curso '+ newCourse )
    // }

};

// rogger.prototype.nuevoCurso(newCourse){
//     this.cursosAprobados.push(newCourse);
//     console.log('Felicitaciones agregaste un nuevo curso '+ newCourse )
// }

function Student (name, lastName, age, cursosAprobados){
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.cursosAprobados = cursosAprobados,
    this.getInfo = function() { //creamos metodos
        return 'Name: ' + this.name + ' ' + this.lastName + ' tiene: ' + this.age + ' años';
    }
}

//para crear metodos de los prototipos se puede agregar por fuera de la funcion con prototype
Student.prototype.newCourses = function (newCourse){
    this.cursosAprobados.push(newCourse);
//     console.log('Felicitaciones agregaste un nuevo curso '+ newCourse )
}

Student.prototype.removeCourses = function (newCourse){
    this.cursosAprobados.pop(newCourse);
//     console.log('Felicitaciones agregaste un nuevo curso '+ newCourse )
}

//ahora crearemos una instancia del objeto Student
//lo prototipos se crean con la palabra reservada new
const Marcia = new Student(//le enviamos los argumentos al prototipo
    "Marcia",
    "Alvarado",
    48, 
    ["bizcochuelos",
    "pan de yuca"]
    );



