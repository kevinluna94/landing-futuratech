const scriptURL = "https://script.google.com/macros/s/AKfycbyVf3RCYsJZnL_VXF5FnWKsRS8x7b0N9TTtTsR2DVlyAej1vfu_OGu4ex6CvTuRBLDF/exec";

document.getElementById("miFormulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  const data = {
    nombreCompleto: form.nombreCompleto.value,
    email: form.email.value,
    telefono: form.telefono.value,
    ciudad: form.ciudad.value,
    provincia: form.provincia.value,
    pais: form.pais.value,
    edad: form.edad.value,
    genero: form.genero.value,
    intereses: form.intereses.value,
    fuente: form.fuente.value,
    consentimiento: form.consentimiento.checked ? "Sí" : "No"
  };

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "✅ Datos enviados correctamente";
    mensaje.style.display = "block";
    mensaje.style.color = "#00ff00";
    form.reset();
  })
  .catch((err) => {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "❌ Error al enviar: " + err;
    mensaje.style.display = "block";
    mensaje.style.color = "#ff4444";
  });
});
