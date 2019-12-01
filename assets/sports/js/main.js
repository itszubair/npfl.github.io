$(document).ready(function () {
    
    var slideNav = ".ng-slide-nav > ul > li";
    var slideItem = ".ng-slides > .ng-slide-item";
    $(slideNav).hover(function () {
        var ind = $(this).index();
        $(slideNav).removeClass("active");
        $(this).addClass("active");
        $(slideItem).removeClass("active");
        $(slideItem).eq(ind).addClass("active");
    });


    //    Parallax Initializer
//    $.stellar({
//        horizontalScrolling: false,
//        responsive: true
//    });

});