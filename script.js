function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.getElementById('boton-mensaje').addEventListener('click', function() {
    const mensajeDiv = document.querySelector('.mensaje-especial');
    const mensajeP = document.getElementById('mensaje-especial');
    const boton = document.getElementById('boton-mensaje');
    const fullText = '¡Te quiero mucho! Gracias por ser el mejor papá del mundo. Que tengas un día increíble lleno de amor y alegría. Att: tu hija ♡ ';

    if (mensajeDiv.classList.contains('oculto')) {
        // Revelar con typewriter
        mensajeDiv.classList.remove('oculto');
        mensajeDiv.classList.add('visible');
        typeWriter(mensajeP, fullText, 100); // 100ms por letra
        boton.textContent = 'Ocultar Mensaje';
    } else {
        // Ocultar
        mensajeDiv.classList.remove('visible');
        setTimeout(() => {
            mensajeDiv.classList.add('oculto');
            mensajeP.textContent = fullText; // Reset para próxima vez
        }, 500);
        boton.textContent = 'Revelar Mensaje';
    }
});

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸ Pause Música';
    } else {
        audio.pause();
        playBtn.textContent = '▶ Play Música';
    }
});
