const formulario = document.getElementById("formulario-nota");
const mensaje = document.getElementById("mensaje");
const listaNotas = document.getElementById("lista-notas");

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    formulario.classList.add("validado");

    if (!formulario.checkValidity()) {
    mostrarMensaje("Por favor, completa los campos requeridos.", "error");
    formulario.querySelector("input:invalid, textarea:invalid").focus();
    return;
    }

    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;

  // Agregar nota a la lista visual
    const li = document.createElement("li");
    li.innerHTML = `<strong>${titulo}</strong>: ${contenido}`;
    listaNotas.appendChild(li);

    mostrarMensaje("¡Nota guardada con éxito!", "exito");
    formulario.reset();
    formulario.classList.remove("validado");
});

formulario.addEventListener("reset", function (evento) {
    if (formulario.querySelector("#titulo").value.trim() !== "" || 
        formulario.querySelector("#contenido").value.trim() !== "") {
    if (!confirm("¿Estás seguro de que deseas limpiar el formulario? Se perderá lo escrito.")) {
        evento.preventDefault();
        return;
    }
    }
    mostrarMensaje("Formulario limpio.", "info");
});