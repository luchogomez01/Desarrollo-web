// Funcion para obtener la fecha actual
function reloj (){

    const fechaActual = new Date();
    
    // Guardo en constantes los dias y meses para armar la cadena
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // Obtengo la info que voy a mostrar en el resultado final
    const dia       = dias[fechaActual.getDay()];
    const diaNumero = fechaActual.getDate();
    const mes       = meses[fechaActual.getMonth()];
    const anio      = fechaActual.getFullYear();
    let hora        = fechaActual.getHours();
    const minutos   = fechaActual.getMinutes();
    const segundos  = fechaActual.getSeconds();
    
    // Seteo el am/pm
    const periodo = (hora >= 12) ? 'PM' : 'AM';
    
    // Como mostramos am y pm tendria que ser hasta 12, por eso seteo que no sea ej 23 hs
    hora = hora % 12;
    // Verifico que hora no sea 0, si es 0 significa que son 24hs, por eso lo seteo como 12 pm
    hora = (hora) ? hora : 12;
    
    const resultado = `${dia} ${diaNumero} de ${mes} de ${anio} ${hora}:${minutos}:${segundos} ${periodo}`;
    // Actualizo la fecha
    document.getElementById('reloj').innerHTML = resultado;
};

// Seteo intervalo para que se actualice cada seg
let relojInterval = setInterval(reloj, 1000);

// Escucho evento para iniciar contador
document.getElementById('startQuizBtn').addEventListener('click', startCountdown);

// Funcion para hacer cuentra regresiva
function startCountdown() {
    document.getElementById('startQuizBtn').style.display = 'none';

    let countdownElement = document.getElementById('countdown');
    countdownElement.className = undefined;

    let countdown = 10;
    let countdownTimer = setInterval(function() {
        countdown--;
        countdownElement.innerHTML = countdown;
        if (countdown === 0) {
            clearInterval(countdownTimer);
            // Redirijo al formulario
            window.location.href = 'form.html';
        }
    }, 1000);
};