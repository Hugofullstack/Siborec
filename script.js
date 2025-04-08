document.addEventListener("DOMContentLoaded", function () {
  const infoContainer = document.getElementById("infoContainer");

  const contentMap = {
    showInfo: `<h2>¿Quiénes somos?</h2><p>Sibo Rec es una productora de artistas, shows y contenidos audiovisuales. Nos especializamos en brindar experiencias únicas a través de la música y el arte.<br> Nuestro equipo está compuesto por profesionales apasionados por la creatividad y la calidad</p>`,
    showInfo2: `<h2>¿Qué ofrecemos?</h2><p>Ofrecemos producción musical, grabaciones en estudio, shows en vivo, eventos privados, creación de contenido visual y asesoramiento artístico para potenciar tu talento o evento.</p>`,
    showInfo3: `<h2>Experiencia</h2><p>Contamos con más de 15 años de trayectoria en el mundo artístico, trabajando con músicos, productores y técnicos que han participado en grandes escenarios y eventos de todo tipo.</p>`,
    showInfo4: `<h2>Resultados</h2><p>Los artistas y proyectos que han confiado en nosotros han alcanzado mayor visibilidad, mejor calidad en sus producciones y una identidad artística sólida. ¡Tu proyecto puede ser el próximo!</p>`
  };

  // Crear un contenedor temporal oculto para calcular el contenido más largo
  const tempDiv = document.createElement("div");
  tempDiv.style.position = "absolute";
  tempDiv.style.visibility = "hidden";
  tempDiv.style.width = infoContainer.offsetWidth + "px";
  document.body.appendChild(tempDiv);

  let maxHeight = 0;
  Object.values(contentMap).forEach(html => {
    tempDiv.innerHTML = html;
    maxHeight = Math.max(maxHeight, tempDiv.offsetHeight);
  });

  infoContainer.style.minHeight = maxHeight + "px";

  // ✅ Mostrar contenido inicial por defecto
  infoContainer.innerHTML = contentMap["showInfo"];

  tempDiv.remove();

  // Eventos de los botones
  Object.keys(contentMap).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        infoContainer.innerHTML = contentMap[buttonId];
      });
    }
  });
});
