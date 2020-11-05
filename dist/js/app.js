// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
// affiche la date de l'année en bas dans le footer
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// affiche le menu sur petits écrants
navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

    // calcule la hauteur du menu sur petits écrant
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
   console.log(linksContainer.getBoundingClientRect());
});
// ********** close links ************

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function () {  
    // window.pageYOffset donne la hauteur de la page par rapport au scroll
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight);
    // fixed navbar quand elle n'est plus visible et change la couleur voir css
    if (scrollHeight >navHeight) {
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    // console.log(link);
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        
        const fixedNav = navbar.classList.contains('fixed-nav')

        let position = element.offsetTop - navHeight;
        // console.log(position);


        if (!fixedNav) {
            positio = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + navHeight
        }
        window.scrollTo({
            left:0,
            top : position,
        })
        linksContainer.style.height = 0
    })
})
