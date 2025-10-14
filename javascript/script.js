// JavaScript básico para interactividad

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener referencias a elementos del DOM
    const boton = document.getElementById('miBoton');
    const mensajeElemento = document.getElementById('mensaje');
    
    // Contador para los clics
    let contadorClics = 0;
    
    // Función que se ejecuta al hacer clic en el botón
    function manejarClic() {
        contadorClics++;
        mensajeElemento.textContent = `¡Has hecho clic ${contadorClics} ${contadorClics === 1 ? 'vez' : 'veces'}!`;
        
        // Cambiar el color del mensaje basado en el número de clics
        if (contadorClics <= 3) {
            mensajeElemento.style.color = 'green';
        } else if (contadorClics <= 6) {
            mensajeElemento.style.color = 'orange';
        } else {
            mensajeElemento.style.color = 'red';
        }
    }
    
    // Agregar event listener al botón
    boton.addEventListener('click', manejarClic);
    
    // Mensaje de bienvenida en la consola
    console.log('¡JavaScript cargado correctamente!');
    
    // Función adicional para mostrar la hora actual
    function mostrarHora() {
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString('es-ES');
        console.log(`Hora actual: ${hora}`);
    }
    
    // Mostrar la hora cada 5 segundos
    setInterval(mostrarHora, 5000);
    mostrarHora(); // Mostrar inmediatamente
});