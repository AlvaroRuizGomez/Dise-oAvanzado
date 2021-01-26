let movil,
    nombre,
    apellido,
    datosPersona

const PAIS_NACIMIENTO = ['Chile', 'Francia', 'España']

nombre = prompt('Escriba su Primer nombre :')
apellido = prompt('Escriba su Primer apellido :')
movil = prompt('Escriba su numero de móvil:')



console.log({
    persona01:{nombre, apellido, movil},
})

datosPersona = [nombre, apellido, movil]


console.log('Don/Doña: ', datosPersona[0],datosPersona[1], datosPersona[2])
console.log('Lugar de Nacimiento ', PAIS_NACIMIENTO[0])

console.log('Nombre es variable :', typeof nombre )
console.log('Nombre es variable :', typeof apellido)
console.log('Movil es variable :', typeof movil)


