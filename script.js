const botaoMostrar = document.getElementById('btn-nav');
const mostrarNavlinks = document.getElementById('nav-links');
const icon = botaoMostrar.querySelector('i');

botaoMostrar.addEventListener('click',()=>{
    mostrarNavlinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});

