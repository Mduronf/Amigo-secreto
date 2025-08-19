// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable global para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Validar si el campo de texto está vacío.
    if (nombre === '') {
        alert('Por favor, digite un nombre válido.');
        return;
    }

    // Agregar el nombre al array.
    amigos.push(nombre);

    // Actualizar la lista visible en la página.
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = nombre;
    listaAmigos.appendChild(nuevoElementoLista);

    // Limpiar el campo de texto.
    nombreInput.value = '';
}

// Función para sortear al amigo secreto.
function sortearAmigo() {
    // Validar que haya al menos dos amigos para el sorteo.
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleccionar el amigo secreto usando el índice.
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página.
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;


    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}
