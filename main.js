/* abre e fecha o menu quando clicar no icone: hamburger */
const nav = document.querySelector("#header nav");
const toogle = document.querySelectorAll("nav .toggle");

for (const element of toogle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da pagina quando der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    // se o scrool passar da altura do header
    header.classList.add("scroll");
  } else {
    //se o scroll for menor que altura do header
    header.classList.remove("scroll");
  }
}

/* Testimonials slider carousel Swiper */
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* ScrollReveal: Mostra elementos quando rolar a pagina */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand , footer .social
  `,
  { interval: 100 }
);

/* Botão voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* When rolar a pagina */
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll();
  backToTop();
});
