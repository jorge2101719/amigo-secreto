// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

//console.log(miAmigo);



function agregarAmigo () {
    let miAmigo = document.querySelector('#amigo').value;
        console.log(miAmigo);
        listaDeAmigos.push(miAmigo);
        console.log(listaDeAmigos);
        actualizarListado(miAmigo);
        limpiarCaja();
}

function actualizarListado(persona) {
    let listado = document.querySelector('#listaAmigos');
    listado.innerHTML += `<li>${persona}</li>`;    
}


function limpiarCaja () {
    document.getElementById('amigo').value = '';
}


agregarAmigo();