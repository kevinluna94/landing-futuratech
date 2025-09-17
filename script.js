const scriptURL = "https://script.google.com/macros/s/AKfycbyVf3RCYsJZnL_VXF5FnWKsRS8x7b0N9TTtTsR2DVlyAej1vfu_OGu4ex6CvTuRBLDF/exec";

document.getElementById("miFormulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const mensaje = document.getElementById("mensaje");

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

  // Mostrar mensaje de éxito visualmente atractivo
  mensaje.innerHTML = "✅ <strong>¡Mensaje enviado!</strong>";
  mensaje.style.display = "block";
  mensaje.style.color = "#fff";
  mensaje.style.background = "linear-gradient(90deg,#00c6ff,#0073e6)";
  mensaje.style.padding = "15px 25px";
  mensaje.style.borderRadius = "12px";
  mensaje.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
  mensaje.style.opacity = "0";
  mensaje.style.transform = "scale(0.5)";
  mensaje.style.transition = "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)";

  // Animación tipo pop
  setTimeout(() => {
    mensaje.style.opacity = "1";
    mensaje.style.transform = "scale(1)";
  }, 10);

  // Vaciar campos inmediatamente
  form.querySelectorAll("input, select").forEach(field => {
    if (field.type === "checkbox") {
      field.checked = false;
    } else {
      field.value = "";
    }
  });

  // Enviar datos en segundo plano
  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .catch((err) => {
    mensaje.innerHTML = "❌ <strong>Error al enviar:</strong> " + err;
    mensaje.style.background = "#ff4444";
    mensaje.style.color = "#fff";
    mensaje.style.opacity = "1";
    mensaje.style.transform = "scale(1)";
  });
});
