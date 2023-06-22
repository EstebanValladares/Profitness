function myFunction() {
    var x = document.getElementById("desplegable");

    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.position = "absolute";
        x.style.width = "100%";
        x.style.backgroundColor = '#99BDDF';
    }
}



function mostrarContenido(dia) {
    var contenido = document.getElementById('contenido');
    
    switch (dia) {
        case 'lunes':
            contenido.innerHTML = `
                <h2>PIERNA</h2>
                <img src="imagenes/4lunes.jpg" alt="Imagen 1">
                <p style="text-align: center;">Sentadilla 4 series - 13 repeticiones</p>

                <img src="imagenes/5lunes.jpg" alt="Imagen 2">
                <p style="text-align: center;">Sentadilla elevada 4 series - 13 repeticiones</p>

                <img src="imagenes/6lunes.jpg" alt="Imagen 3">
                <p style="text-align: center;">Femoral 4 series - 12 repeticiones</p>

                <img src="imagenes/7lues.jpg" alt="Imagen 1">
                <p style="text-align: center;">prensa 4 series - 12 repeticiones</p>
                <p style="text-align: center;">Discos de 10kg a los lados</p>

                <img src="imagenes/8lunes.jpg" alt="Imagen 2">
                <p style="text-align: center;">Puente 4 series - 12 repeticines</p>

                <img src="imagenes/9lunes.png" alt="Imagen 2">
                <p style="text-align: center;">elevacion 4 series - 12 repeticines</p>
            `;
            break;
        case 'martes':
            contenido.innerHTML = `
            <h2>ESPALDA Y ABDOMEN</h2>
            <img src="imagenes/martes1.jfif" alt="Imagen 1">
            <p style="text-align: center;">Polea al pecho 4 series - 12 repeticiones</p>

            <img src="imagenes/martes2.jpg" alt="Imagen 2">
            <p style="text-align: center;">remo con mancuerna 4 series - 12 repeticiones</p>

            <img src="imagenes/martes3.jpg" alt="Imagen 3">
            <p style="text-align: center;">polea baja 4 series - 12 repeticiones</p>

            <img src="imagenes/martes4.jpg" alt="Imagen 1">
            <p style="text-align: center;">abdominales 3 series - 12 repeticiones</p>

            <img src="imagenes/martes5.jpg" alt="Imagen 2">
            <p style="text-align: center;">Plancha 3 series - 30 segundos c/u</p>
            `;
            break;
        case 'miércoles':
            contenido.innerHTML = `
            <h2>FEMORAL</h2>
            <img src="imagenes/miercoles1.jpg" alt="Imagen 1">
            <p style="text-align: center;">Sentadilla c/mancuerna 4 series - 15 repeticiones</p>

            <img src="imagenes/miercoles2.jpg" alt="Imagen 2">
            <p style="text-align: center;">Femoral en maquina 4 series - 12 repeticiones</p>

            <img src="imagenes/miercoles3.jpg" alt="Imagen 3">
            <p style="text-align: center;">Aduptore 4 series - 15 repeticiones</p>

            <img src="imagenes/miercoles4.jpg" alt="Imagen 1">
            <p style="text-align: center;">Gemelos-barra 4 series - 15 repeticiones</p>

            <img src="imagenes/miercoles5.png" alt="Imagen 2">
            <p style="text-align: center;">Gemelos-discos 4 series -  15 repeticionesc/u</p>
            `;
            break;
        case 'jueves':
            contenido.innerHTML = `
            <h2>BICEP, TRICEP & HOMBRO</h2>
            <img src="imagenes/jueves1.jpg" alt="Imagen 1">
            <p style="text-align: center;">curl 4 series - 12 repeticiones</p>

            <img src="imagenes/jueves2.jpg" alt="Imagen 2">
            <p style="text-align: center;">Extension triceps 4 series - 12 repeticiones</p>

            <img src="imagenes/jueves3.jpg" alt="Imagen 3">
            <p style="text-align: center;">Extension vertical 4 series - 12 repeticiones</p>

            <img src="imagenes/jueves4.jpg" alt="Imagen 1">
            <p style="text-align: center;">Elevacion disco 4 series - 12 repeticiones</p>

            <img src="imagenes/jueves5.png" alt="Imagen 2">
            <p style="text-align: center;">Elevacion lateral 4 series -  12 repeticionesc/u</p>
            `;
            break;
        case 'viernes':
            contenido.innerHTML = `
            <h2>FULL PIERNA</h2>
            <img src="imagenes/viernes1.png" alt="Imagen 1">
            <p style="text-align: center;">Sentadilla 4 series - 15 repeticiones</p>

            <img src="imagenes/viernes2.jpg" alt="Imagen 2">
            <p style="text-align: center;">Prensa 4 series - 12 repeticiones</p>

            <img src="imagenes/viernes3.jfif" alt="Imagen 3">
            <p style="text-align: center;">Elevacion femoral 4 series - 12 repeticiones</p>

            <img src="imagenes/viernes4.png" alt="Imagen 1">
            <p style="text-align: center;">Puentes 4 series - 15 repeticiones</p>

            <img src="imagenes/viernes5.png" alt="Imagen 2">
            <p style="text-align: center;">Elevacion gemelos 4 series -  15 repeticionesc/u</p>
            `;
            break;
        default:
            contenido.innerHTML = `
                <h2>Selecciona un día de la semana para ver el contenido</h2>
            `;
            break;
    }
}