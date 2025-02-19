// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let btnAgregar = document.getElementById('amigo');
let mensajeDeAlerta = 'Debe ingresar un nombre';

btnAgregar.addEventListener('click', agregarAmigo())

//console.log(miAmigo);



function agregarAmigo () {
    let miAmigo = document.querySelector('#amigo').value;

    if (miAmigo != '') {
        listaDeAmigos.push(miAmigo);
        actualizarListado(miAmigo);
        limpiarCaja();
    } else {
        if (miAmigo === '' && listaDeAmigos.length === 0) {
            // Este es un truco para que el mensaje de alerta no se dispare al cargar la página
            // Simplemente doy una instrucción vacía, para que nada sea realizado
        } else {
            alert(mensajeDeAlerta);
        }
    }
}

function actualizarListado(persona) {
    let listado = document.querySelector('#listaAmigos');
    listado.innerHTML += `<li>${persona}</li>`;    
}

function sortearAmigo () {
    if (listaDeAmigos.length > 0) {
        let listado = document.querySelector('#listaAmigos');
        let resultadoDelSorteo = document.querySelector('#resultado');
        let valorAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[valorAleatorio];
        listado.innerHTML = '';
        resultadoDelSorteo.innerHTML = `El amigo(a) sorteado(a) es ${amigoSorteado}`
    } else {
        alert('No hay nombres ingresados');
    }
}

function limpiarCaja () {
    document.getElementById('amigo').value = '';
}


//agregarAmigo();