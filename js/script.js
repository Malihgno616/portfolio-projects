document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-projects button");
  const section = document.querySelector("section.projects");

  btn.addEventListener("click", () => {
    if (
      btn.classList.contains("active") &&
      section.classList.contains("show")
    ) {
      btn.classList.remove("active");
      section.classList.remove("show");

      for (let i = 1; i <= 6; i++) {
        section.innerHTML = `
          <div>
            <h3>Projeto Nome</h3>
            <a href="#">Clique aqui</a>
          </div>
        `;
      }

      btn.textContent = "Clique aqui para ver mais projetos";
    } else {
      btn.classList.add("active");
      section.classList.add("show");

      for (let i = 1; i <= 5; i++) {
        section.innerHTML += `
          <div>
            <h3>Projeto ${i}</h3>
            <a href="#">Ver projeto ${i}</a>
          </div>
        `;
      }

      btn.textContent = "Ver menos projetos";
    }
  });
});
