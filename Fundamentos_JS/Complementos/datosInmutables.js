const kevin = {
    nombre : 'Kevin',
    apellido : 'Lopez',
    years : 24
}

//const cumpleanos = persona => persona.years++
const cumpleanosInmutables = persona =>({
    ...persona,
    years: persona.years +1
})