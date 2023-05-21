let menu = document.querySelector('#menu-icon');
let navlist = document.queryselector('.navlist');

menu.onclick = () => {
  menu.classlist.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true});

sr.reveal('.animal-text',{delay: 200, origin: 'top'});
sr.reveal('.animal-img',{delay: 450, origin: 'top'});
sr.reveal('.icons',{delay: 500, origin: 'left'});
sr.reveal('.scroll-down',{delay: 200, origin: 'right'});