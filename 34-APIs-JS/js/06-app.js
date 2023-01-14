//* Speech API

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeachAPI);

function ejecutarSpeachAPI() {
  const SpeechRecognition = webkitSpeechRecognition;

  const recognition = new SpeechRecognition(); 

  recognition.start();

  recognition.onstart = function() {
    salida.classList.add('mostrar');
    salida.textContent = 'Escuchando...';
  }

  recognition.onspeechend = function(e) {
    salida.textContent = 'Se dejo de grabar...';
    recognition.stop();
  }

  recognition.onresult = function(e) {
    console.log(e.results[0][0]); 

    const { confidence, transcript } = e.results[0][0];

    const speech = document.createElement('p');
    speech.innerHTML = `Grabado: ${transcript}`;

    salida.appendChild(speech);
  }

}










