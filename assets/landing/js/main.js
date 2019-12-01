$(document).ready(function () {

    // Hero Slider
    var slideNav = ".ng-slide-nav > ul > li";
    var slideItem = ".ng-slides > .ng-slide-item";
    $(slideNav).hover(function () {
        var ind = $(this).index();
        $(slideNav).removeClass("active");
        $(this).addClass("active");
        $(slideItem).removeClass("active");
        $(slideItem).eq(ind).addClass("active");
    });
    $('.parallaxie').parallaxie({
        speed: 0.5
    });
});
