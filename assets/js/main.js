$(document).ready(function () {
    $('.slider_top').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
    });
    $('.slider_news').slick({
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });
    $("[data-fancybox]").fancybox({
        buttons: [
            "zoom",
            "close"
        ],
        protect: true,
        toolbar: true
    });
    //       MENU
    let header = $(".js-header");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            header.addClass('dark-bg');
        } else {
            header.removeClass('dark-bg');
        }
    });
    $("a.nav_link").click(function () {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 2000,
            aesing: 'swing'
        });
        return false;
    });
});

//         Arrows
function PrevSlide() {
    $(".slider_news").slick('slickPrev');
}
function NextSlide() {
    $(".slider_news").slick('slickNext');
}

//         MAP, Marker
let myMarker = L.icon({
    iconUrl: 'assets/images/marker-top.png',
    shadowUrl: 'assets/images/marker-bottom.png',

    iconSize: [16, 16],
    shadowSize: [72, 70],
    iconAnchor: [46.965029, 32.000263],
    shadowAnchor: [75, 58],
    popupAnchor: [46.964443, 32.008846]
});
map = L.map('map').setView([46.965029, 32.000263], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([46.965029, 32.000263], { icon: myMarker }).addTo(map);