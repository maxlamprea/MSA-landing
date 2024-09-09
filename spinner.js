function showSpinner() {
    // Mostrar el spinner configurando su opacidad a 1
    document.getElementById("loader").style.opacity = "1";
}

function hideSpinner() {
    // Desvanecer el spinner configurando la opacidad a 0
    document.getElementById("loader").style.opacity = "0";
    
    setTimeout(function() {
        document.getElementById("root").style.opacity = "1";
    }, 1000); // Esperar para que coincida con el tiempo de transición del spinner
}

// Mostrar el spinner cuando la página comienza a cargar
showSpinner();

// Ocultar el spinner después de x segundo y mostrar el contenido
setTimeout(() => {
    hideSpinner();
}, 2000);