// INCLUIR ANIMACION

$(document).ready(function () {
    $('.espacio-animacion').load('imagen-animada.html');
});

/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});




/*---------------------------------
   CABECERA ANIMADA MENU
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.barra-menu-mobile');
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        nav.addClass("barra-menu-mobile-animado");
    } else {
        nav.removeClass("barra-menu-mobile-animado");
    }
});
/*---------------------------------
   CABECERA ANIMADA MENU DESKTOP
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.menu-principal-desktop');
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        nav.addClass("menu-principal-desktop-animado");
    } else {
        nav.removeClass("menu-principal-desktop-animado");
    }
});
/*---------------------------------
   CABECERA ANIMADA LOGO DESKTOP
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.logo-desktop');
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        nav.addClass("logo-desktop-animado");
    } else {
        nav.removeClass("logo-desktop-animado");
    }
});
/* -------------------------------------
    TOOLTIP
----------------------------------------*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
