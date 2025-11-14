window.onload = function() {
    mostrarContactos();
};

document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let destino = document.getElementById("destino").value;
    let mensaje = document.getElementById("mensaje").value;

    let contacto = { nombre, email, destino, mensaje };

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contacto);

    localStorage.setItem("contactos", JSON.stringify(contactos));

    document.getElementById("form-contacto").reset();

    mostrarContactos();
});

function mostrarContactos() {
    let lista = document.getElementById("lista-contactos");
    lista.innerHTML = "";

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    contactos.forEach((c, i) => {
        let item = document.createElement("li");
        item.textContent = `${i + 1}. ${c.nombre} - ${c.email} - ${c.destino} - ${c.mensaje}`;
        lista.appendChild(item);
    });
}

const musica = document.getElementById("musica-fondo");
const botonMusica = document.getElementById("btn-musica");

botonMusica.addEventListener("click", function() {
    if (musica.paused) {
        musica.play();
        botonMusica.textContent = "Pausar música";
    } else {
        musica.pause();
        botonMusica.textContent = "Reproducir música";
    }
});