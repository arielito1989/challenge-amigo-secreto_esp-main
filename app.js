// Array para almacenar los amigos
let almacenarNombres = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de texto
    let nombre = document.getElementById("nombreAmigo").value.trim(); // .trim() elimina los espacios al principio y final
    
    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // No continuar si el campo está vacío
    }
    // Verificar si el nombre ya existe en el array
    if (almacenarNombres.includes(nombre)){
        alert("Ese nombre ya existe!");
        document.getElementById("nombreAmigo").value = "";
        return; // No agregar el nombre si ya existe
        
    }



    // Agregar el nombre al arreglo
    almacenarNombres.push(nombre);

    // Limpiar el campo de texto
    document.getElementById("nombreAmigo").value = "";

    // Actualizar la lista de amigos en la página
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos amigos

    // Recorrer el array y agregar los amigos a la lista
    almacenarNombres.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
        
    });
}
// Función para seleccionar un amigo aleatorio
function seleccionarAmigoAleatorio () {
    if (almacenarNombres.length===0) {
        alert ("¡No hay amigos en la lista para sortear!");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random()*almacenarNombres.length);

    //Obtener el nombre seleccionado!
    const amigoSeleccionado = almacenarNombres[indiceAleatorio];

    //Y finalmente, mostrar el amigo seleccionado
    document.getElementById("resultadoSorteo").innerHTML = `El amigo seleccionado es ${amigoSeleccionado}`

     //Después del sorteo, limpiar la lista y resetear todo
    
    setTimeout(() => {
        resetearLista(); 
    }, 5000); // Se limpia la lista después de 5 segundos
}


//Función para reiniciar la lista después del sorteo
function resetearLista() {
    almacenarNombres = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista en HTML
    document.getElementById("resultadoSorteo").innerHTML = ""; // Limpiar resultado
}