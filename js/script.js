document.getElementById('startQuizBtn').addEventListener('click', startCountdown);

function startCountdown() {
    document.getElementById('startQuizBtn').style.display = 'none';

    let countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.innerHTML = '10';
    document.body.appendChild(countdownElement);

    let countdown = 10;
    let countdownTimer = setInterval(function() {
        countdown--;
        countdownElement.innerHTML = countdown;
        if (countdown === 0) {
            clearInterval(countdownTimer);
            showQuiz();
        }
    }, 1000);
}

function showQuiz() {
    document.getElementById('countdown').style.display = 'none';

    let quizElement = document.createElement('div');
    quizElement.id = 'quiz';
    quizElement.innerHTML = `
        <div class="question">
            <p>¿Cuántos integrantes tiene el grupo? (ingrese valor numérico)</p>
            <input type="number" id="q1">
        </div>
        <div class="question">
            <p>¿Quién es el integrante que tiene como hobby andar en bicicleta? (ingrese su nombre)</p>
            <input type="text" id="q2">
        </div>
        <div class="question">
            <p>¿Quién es el integrante que trabaja como analista funcional?</p>
            <input type="text" id="q3">
        </div>
        <div class="question">
            <p>Nombra alguno de los pasatiempos de Uriel</p>
            <input type="text" id="q4">
        </div>
        <div class="question">
            <p>¿Qué cosas le gustan a Nahuel?</p>
            <input type="text" id="q5">
        </div>
        <button id="submitQuizBtn">Enviar Respuestas</button>
    `;
    document.body.appendChild(quizElement);

    document.getElementById('submitQuizBtn').addEventListener('click', calculateScore);
}

function calculateScore() {
    let score = 0;

    if (document.getElementById('q1').value == '5') score += 2;
    if (document.getElementById('q2').value.toLowerCase() == 'leandro') score += 2;
    if (document.getElementById('q3').value.toLowerCase() == 'emmanuel') score += 2;

    const q4Response = document.getElementById('q4').value.toLowerCase();
    if (q4Response == 'ver futbol' || q4Response == 'mirar series' || q4Response == 'jugar videojuegos') score += 2;

    const q5Response = document.getElementById('q5').value.toLowerCase();
    if (q5Response == 'jugar videojuegos' || q5Response == 'salir con amigos' || q5Response == 'leer comics') score += 2;

    let message = '';
    if (score === 10) {
        message = '¡Felicitaciones! Obtuvo el máximo puntaje';
    } else if (score >= 7 && score <= 9) {
        message = 'Muy bien hecho. Puntaje entre 7 y 9';
    } else if (score >= 5 && score <= 6) {
        message = 'Buen trabajo. Puntaje entre 5 y 6';
    } else if (score >= 3 && score <= 4) {
        message = 'Puedes hacerlo mejor. Puntaje entre 3 y 4';
    } else {
        message = 'Tómate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta pronto!';
    }

    alert(message);
}


