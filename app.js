// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let mensajeDeAlerta = 'Debe ingresar un nombre';
let amigosSorteados = [];
let listado = document.querySelector('#listaAmigos');

// Lógica de la función agregarAmigo
function agregarAmigo () {
    let miAmigo = document.querySelector('#amigo').value;

    // Al pulsar 'añadir', se verifica que el input no esté vacío
    if (miAmigo != '') {
        listaDeAmigos.push(miAmigo);
        actualizarListado(miAmigo);
        limpiarCaja();
    } else {
        // se impide que el mensaje se muestre al cargar la página
        if (miAmigo === '' && listaDeAmigos.length === 0) {
            alert(mensajeDeAlerta);
        } else {
            alert(mensajeDeAlerta);
        }
    }
}
// Lógica de la función actualizarListado
function actualizarListado(persona) {
    listado.innerHTML += `<li>${persona}</li>`;    
}

// Lógica de la función sortearAmigo. Dado las características del juego, asumo que el sorteo se realiza un única vez
// por lo que no sería necesario preguntar si el nombre ya ha sido sorteado antes.
function sortearAmigo () {
    if (listaDeAmigos.length > 0) {
        let resultadoDelSorteo = document.querySelector('#resultado');
        let valorAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[valorAleatorio];
        listado.innerHTML = '';
        resultadoDelSorteo.innerHTML = `El amigo(a) sorteado(a) es ${amigoSorteado}`
    } else {
        alert('Hasta el momento, no hay nombre ingresados. Por favor, ingrese al menos un nombre');
    }
}

// Lógica de la función limpiarCaja
function limpiarCaja () {
    document.getElementById('amigo').value = '';
}

//agregarAmigo();