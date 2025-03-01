// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let mensajeDeAlerta = 'Por favor, ingrese un nombre';
let amigosSorteados = [];
let listado = document.querySelector('#listaAmigos');
let numeroMaximo = 0;

// Lógica de la función agregarAmigo
function agregarAmigo () {
    let miAmigo = document.querySelector('#amigo').value;

    // Al pulsar 'añadir', se verifica que el input no esté vacío
    if (miAmigo != '' && !listaDeAmigos.includes(miAmigo)) {
        listaDeAmigos.push(miAmigo);
        actualizarListado(miAmigo);
        limpiarCaja();
    } else {
        // se impide que el mensaje se muestre al cargar la página y se hace uso de la función enfocar()
        if (miAmigo === '') {
            //alert(mensajeDeAlerta);
            Swal.fire({
                title: 'Campo vacío',
                text: mensajeDeAlerta,
                icon: 'error'
            });
            enfocar();
        } else {
            if (listaDeAmigos.includes(miAmigo)) {
            // se muestra un mensaje de alerta si el nombre ingresado ya está en la lista
            Swal.fire({
                title: 'Nombre repetido',
                text: 'El nombre ingresado ya está en la lista',
                icon: 'warning'
            });
            limpiarCaja();
            enfocar();
            }
        }
    }
}
// Lógica de la función actualizarListado
function actualizarListado(persona) {
    listado.innerHTML += `<li>${persona}</li>`;    
}

// Lógica de la función sortearAmigo. Dado las características del juego, asumo que el sorteo se puede realizar más de una vez
function sortearAmigo () {
    let valorAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[valorAleatorio];
    let resultadoDelSorteo = document.querySelector('#resultado');
    numeroMaximo = listaDeAmigos.length;

    // verificamos si hay nombre en la lista de amigos tiene por lo menos un nombre
    if (listaDeAmigos.length > 0) {
        // comprobamos si la lista de amigos sorteada alcanzó el máximo valor
        if (amigosSorteados.length == numeroMaximo) {
            // si se cumple la condición, se muestra un mensaje de alerta
            Swal.fire({
                title: 'Se sortearon todos los nombres',
                text: 'El sorteo ha finalizado',
                icon: 'info'
            });
        } else {
            // verificamos si el nombre sorteado está en la lista de los escogidos antes
            // de estarlo, volvemos a llamar a la función usando recursividad
            if (amigosSorteados.includes(amigoSorteado)) {
                return sortearAmigo();
            } else {
                // si el nombre sorteado no está en la lista de los escogidos, lo agregamos
                amigosSorteados.push(amigoSorteado);
                listado.innerHTML = '';
                resultadoDelSorteo.innerHTML = `El amigo(a) sorteado(a) es ${amigoSorteado}`
            }
        }
    } else {
        // Mensaje de advertencia si se intenta hacer un sorteo con la lista de amigos vacía; uso función enfocar()
        Swal.fire({
            title: 'No hay nombres ingresados',
            text: 'Por favor, ingrese al menos un nombre',
            icon: 'error'
        });
        enfocar();
    }
}

// Lógica de la función limpiarCaja
function limpiarCaja () {
    document.getElementById('amigo').value = '';
    // se incluye enfocar, para dar el efecto de espera en input después de ingresar un nombre
    enfocar();
}

// se agrega la función enfocar con ayuda de focus, para que el cursor esté dentro del input
function enfocar () {
    document.getElementById('amigo').focus();
}

// llamada inicial, para que el cursor esté en el campo input desde el inicio
enfocar();