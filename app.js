// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let mensajeDeAlerta = 'Por favor, ingrese un nombre';
let amigosSorteados = [];
let listado = document.querySelector('#listaAmigos');
let campoInput = document.querySelector('#amigo');
let numeroMaximo = 0;


// Lógica para mostrar un mensaje de bienvenida al cargar la página
window.onload = function () {
    Swal.fire({
        title: '¡Bienvenido(a)!',
        text: 'Este es un sorteo de amigo secreto. Ingrese los nombres de los participantes y haga clic en el botón "Sortear amigo" para saber quién le tocará a cada uno. ¡Buena suerte!',
        icon: 'info'
    });
}

// Lógica para que el input solo acepte letras y espacios
campoInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ ]/i/g, '');
});

// Lógica para que el input acepte solo letras y espacios, y que el enter funcione como un click en el botón agregar
campoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});

// Lógica de la función agregarAmigo
function agregarAmigo () {    
    let miAmigo = campoInput.value.toUpperCase();
    enfocar();

    // se verifica si el input está vacío
    if (miAmigo === '') {
        Swal.fire({
            title: 'Campo vacío',
            text: mensajeDeAlerta,
            icon: 'error'
        });
        limpiarCaja();
    } else {
        // se verifica si el nombre ingresado ya está en la lista
        if (listaDeAmigos.includes(miAmigo)) {
            Swal.fire({
                title: 'Nombre repetido',
                text: 'El nombre ingresado ya está en la lista',
                icon: 'warning'
            });
            limpiarCaja();
        } else {
            // si el campo input no está vacío y el nombre ingresado no está en la lista, se agrega a la lista  y se actualiza el listado
            listaDeAmigos.push(miAmigo);
            actualizarListado(miAmigo);
            limpiarCaja();
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
    enfocar();

    // verificamos si hay nombre en la lista de amigos tiene por lo menos un nombre
    if (listaDeAmigos.length > 0) {
        // comprobamos si la lista de amigos sorteada alcanzó el máximo valor
        if (amigosSorteados.length == numeroMaximo) {
            // si se cumple la condición, se muestra un mensaje de alerta
            Swal.fire({
                title: 'Has sorteado a todos los amigos',
                text: '¿Desea reiniciar el sorteo?',
                showDenyButton: true,
                confirmButtonText: `Reiniciar`,
                denyButtonText: `Cancelar`,
                icon: 'warning'
            }).then((result) => {
                if (result.isConfirmed) {
                    reiniciarSorteo();
                }
            });
            // limpiamos la caja
            limpiarCaja();
            // limpiamos la lista de amigos
            resultadoDelSorteo.innerHTML = '';
        } else {
            // verificamos si el nombre sorteado está en la lista de los escogidos antes
            // de estarlo, volvemos a llamar a la función usando recursividad
            if (amigosSorteados.includes(amigoSorteado)) {
                return sortearAmigo();
            } else {
                // si el nombre sorteado no está en la lista de los escogidos, lo agregamos
                amigosSorteados.push(amigoSorteado);
                listado.innerHTML = '';
                agregarMarco();
                resultadoDelSorteo.innerHTML = `El amigo(a) sorteado(a) es ${amigoSorteado}`;
                efectoDelGanador();
            }
        }
    } else {
        // Mensaje de advertencia si se intenta hacer un sorteo con la lista de amigos vacía; uso función enfocar()
        Swal.fire({
            title: 'No hay nombres ingresados',
            text: 'Por favor, ingrese al menos un nombre',
            icon: 'error'
        })
    }
}

// Lógica de la función lanzarConfeti
function efectoDelGanador() {
    let duracion = 5000;
    let fin = Date.now() + duracion;

    // se llama a la función confetti para que se ejecute el efecto de confeti
    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < fin) {
            requestAnimationFrame(frame);
        }
    })();
}

// Lógica de la función limpiarCaja
function limpiarCaja () {
    campoInput.value = '';
}

// se agrega la función enfocar con ayuda de focus, para que el cursor esté dentro del input
function enfocar () {
    campoInput.focus();
}

// llamada inicial, para que el cursor esté en el campo input desde el inicio
enfocar();

// Lógica de la función reiniciarSorteo
function reiniciarSorteo () {
    enfocar();

    // se verifica si la lista de amigos tiene por lo menos un nombre
    if (listaDeAmigos.length > 0) {
        listaDeAmigos = [];
        amigosSorteados = [];
        document.querySelector('#resultado').innerHTML = '';
        listado.innerHTML = '';
        limpiarCaja();
        enfocar();
        quitarMarco();
    } else {
        // Mensaje de advertencia si se intenta reiniciar el sorteo con la lista de amigos vacía
        Swal.fire({
            title: 'No hay nombres ingresados',
            text: 'Por favor, ingrese al menos un nombre',
            icon: 'error'
        });
        enfocar();
    }
}

function agregarMarco () {
    document.querySelector('#resultado').classList.add('marco');
}

function quitarMarco () {  
    document.querySelector('#resultado').classList.remove('marco');
}