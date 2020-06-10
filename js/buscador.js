// crear los años en las opciones e insertarlo 
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// array con autos
function obtenerAutos() {

    return [{
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];


}

//Datos para la busqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

//variables globales
const autos = obtenerAutos()

//imprimir autos en el html
function mostrarAutos(autos) {
    limpiarHTML()

    const contenedor = document.
    getElementById('resultado')


    //limpiar resultado anterior


    autos.forEach(auto => {
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `
        <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - transmision: ${auto.transmision} - precio: ${auto.precio} - color: ${auto.color}</p>`
        contenedor.appendChild(autoHTML)
    })




}

//Event listener DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
})

// Eventos para el formulario para ir llenando el objeto

const marca = document.querySelector('#marca')
marca.addEventListener('input', e => {

        // el E target me marca todo lo que selecciona el input que se despliega
        datosBusqueda.marca = e.target.value

        //mMandar llamar la funcion de filtrar autos

        filtrarAutos()

    })
    //
const year = document.querySelector('#year')
year.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.year = Number(e.target.value)

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})

const minimo = document.querySelector('#minimo')
minimo.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.minimo = Number(e.target.value)

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})
const puertas = document.querySelector('#puertas')
puertas.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.puertas = Number(e.target.value)

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})

const maximo = document.querySelector('#maximo')
maximo.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.maximo = Number(e.target.value)

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})

const transmision = document.querySelector('#transmision')
transmision.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.transmision = e.target.value

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})
const color = document.querySelector('#color')
color.addEventListener('input', e => {

    // el E target me marca todo lo que selecciona el input que se despliega
    datosBusqueda.color = e.target.value

    //mMandar llamar la funcion de filtrar autos

    filtrarAutos()

})


function error() {
    limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('error', 'alerta')
    noResultado.appendChild(document.createTextNode('no hay resultado'))
    document.querySelector('#resultado').appendChild(noResultado)
}

function limpiarHTML() {
    const contenedor = document.
    getElementById('resultado')
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }

}


// funcion de filtrados
function filtrarAutos() {

    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        error()
    }


}

//peque;as funciones de filtrado
function filtrarMarca(marcaFiltrada) {
    if (datosBusqueda.marca) {
        return marcaFiltrada.marca === datosBusqueda.marca
    } else {
        return marcaFiltrada
    }
}

function filtrarYear(yearFiltrado) {
    if (datosBusqueda.year) {
        return yearFiltrado.year == datosBusqueda.year
    } else {
        return yearFiltrado
    }
}

function filtrarMinimo(auto) {

    // retorname el atributo del objeto si su precio es mayor o igual al minimo
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo
    } else {
        return auto
    }
}

function filtrarMaximo(auto) {

    // retorname el atributo del objeto si su precio es mayor o igual al minimo
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo
    } else {
        return auto
    }
}

function filtrarPuertas(auto) {

    // retorname el atributo del objeto si su precio es mayor o igual al minimo
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas
    } else {
        return auto
    }
}

function filtrarTransmision(auto) {
    // retorname el atributo del objeto si su precio es mayor o igual al minimo
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision
    } else {
        return auto
    }
}

function filtrarColor(auto) {
    // retorname el atributo del objeto si su precio es mayor o igual al minimo
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color
    } else {
        return auto
    }
}