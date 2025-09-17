const scriptURL = "https://script.google.com/macros/s/AKfycbyVf3RCYsJZnL_VXF5FnWKsRS8x7b0N9TTtTsR2DVlyAej1vfu_OGu4ex6CvTuRBLDF/exec";

document.getElementById("miFormulario").addEventListener("submit", async (e) => {
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

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "✅ " + result.result;
    mensaje.style.display = "block";
    form.reset();
  } catch (error) {
    document.getElementById("mensaje").innerText = "❌ Error: " + error;
  }
});
