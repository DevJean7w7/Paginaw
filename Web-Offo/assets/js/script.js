/*Efecto Typed.js*/
var typed = new Typed(".inpunt", {
    strings:["GOBERNABILIDAD.","INTEGRIDAD DE TU INFORMACION.","CONFIDENCIALIDAD.","MEJORA CONTINUA."],
    typeSpeed: 70,
    backSpeed: 65,
    loop: true
})



const brands = document.querySelector('ul.brands'),
    total_brand = brands.children.length;

    document.documentElement.style.setProperty('--total_brand', total_brand)

    for(let i=0; i<total_brand; i++){
        brands.appendChild(brands.children[i].cloneNode(true));
    }






/*estilo Scroll.js*/
const sr= ScrollReveal({
    distance: '35px',
    duration: 2400,
    reset: true,
});



sr.reveal('.main-content',{delay:510, origin: 'top'});
sr.reveal('.main-content h1',{delay:610, origin: 'left'});
sr.reveal('.main-content h4',{delay:610, origin: 'rigth'});
sr.reveal('.main-btnn',{delay:910, origin: 'top'});

/*Logica de scroll*/
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick= () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

$(document).ready(function() {
    $(window).on('scroll load', function() {
        var scrollPosition = $(this).scrollTop();

        $('section').each(function() {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top;
            var threshold = 100; // Ajusta este valor según tus necesidades

            if (scrollPosition >= offset - threshold && scrollPosition < offset + height) {
                $('.navlist ul li a').removeClass('active');
                $('.navlist').find('[href="#' + id + '"]').addClass('active');
            } else {
                $('.navlist').find('[href="#' + id + '"]').removeClass('active');
            }
        });
    });
});

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.content .servicesBx').forEach(product => {
    product.onclick = () => {
        // Agregar una clase al body para deshabilitar el scroll
        document.body.classList.add('no-scroll');

        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });

        // Agregar un retraso de 2 segundos antes de mostrar el contenedor
        setTimeout(() => {
            preveiwContainer.style.display = 'flex';
        }, 1000); // 2000 milisegundos = 2 segundos
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        // Quitar la clase del body para habilitar el scroll nuevamente
        document.body.classList.remove('no-scroll');

        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});

