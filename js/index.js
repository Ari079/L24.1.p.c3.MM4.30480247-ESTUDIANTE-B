/*
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados.
*/

let estudiantes = [
    {nombre: "Luis", semestre: 5, nota: 14},
    {nombre: "Maria", semestre: 3, nota: 18},
    {nombre: "Miguel", semestre: 1, nota: 20},
    {nombre: "Andrea", semestre: 6, nota: 9},
    {nombre: "Jose", semestre: 3, nota: 8},
    {nombre: "Ariana", semestre: 3, nota: 17},
    {nombre: "Willians", semestre: 5, nota: 18},
    {nombre: "Andres", semestre: 2, nota: 9},
    {nombre: "Juan", semestre: 1, nota: 7}
]

let nombresDeAprobados = (estudiantes, semestre) => {
    let arrayEstudiantes = []
    
    estudiantes.forEach(estudiante =>{
        if(estudiante.nota >= 10 && estudiante.semestre == semestre){
            arrayEstudiantes.push(estudiante.nombre)
        }
    })
    return arrayEstudiantes
}

let salida = document.getElementById("salida")

salida.innerHTML = `
    Estudiante que pertenecen al semestre 3: ${nombresDeAprobados(estudiantes, 3)}<br>
    Estudiante que pertenecen al semestre 1: ${nombresDeAprobados(estudiantes, 1)}<br>
    Estudiante que pertenecen al semestre 5: ${nombresDeAprobados(estudiantes, 5)}<br>

`