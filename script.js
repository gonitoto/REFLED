/* ==================================================
   REFLED - JAVASCRIPT
================================================== */


/* ==================================================
   MENÚ MOBILE
================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Cerrar menú al tocar una opción */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ==================================================
   CONSULTAR PRODUCTO
================================================== */

function consultarProducto(producto) {

    const mensajeWhatsApp = encodeURIComponent(

`Hola REFLED 👋

Quisiera solicitar un presupuesto para un espejo a medida.

Nombre: ${nombre}
Email: ${email}
Medidas aproximadas: ${medidas}
Tipo de espejo: ${tipo}

Detalles:
${mensaje}

Espero su respuesta.

Saludos.`
);

const telefono = "5492235630264";

window.open(
    `https://wa.me/${telefono}?text=${mensajeWhatsApp}`,
    "_blank"
);
}


/* ==================================================
   FORMULARIO A MEDIDA
================================================== */

const customForm = document.getElementById("customForm");

customForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const email =
        document.getElementById("email").value;

    const medidas =
        document.getElementById("medidas").value;

    const tipo =
        document.getElementById("tipo").value;

    const mensaje =
        document.getElementById("mensaje").value;


    const subject = encodeURIComponent(
        "Solicitud de espejo a medida"
    );


    const body = encodeURIComponent(

`Hola REFLED,

Quisiera solicitar un presupuesto para un espejo a medida.

Nombre: ${nombre}

Email: ${email}

Medidas aproximadas: ${medidas}

Tipo de espejo: ${tipo}

Detalles:
${mensaje}

Espero su respuesta.

Saludos.`
    );


    window.location.href =
        `mailto:REFLED@gmail.com?subject=${subject}&body=${body}`;

});


/* ==================================================
   BOTÓN VOLVER ARRIBA
================================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
