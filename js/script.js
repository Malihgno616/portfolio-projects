const btnProjects = document.querySelector(".btn-projects");
const moreProjects = document.querySelector(".more-projects");

const projectsArray = [
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
  `<div>
          <h3>Projeto Nome</h3>
          <a href="#">Clique aqui</a>
        </div>`,
];

let projectLoaded = false;

btnProjects.addEventListener("click", () => {
  btnProjects.classList.toggle("active");
  moreProjects.classList.toggle("show");
  if (!projectLoaded) {
    for (let i = 0; i < projectsArray.length; i++) {
      moreProjects.innerHTML += projectsArray[i];
    }
    return (projectLoaded = true);
  }
});
