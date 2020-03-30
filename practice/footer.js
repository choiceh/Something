$("index.html").ready(function(){
$(window).scroll(function () {

 if($(window).scrollTop() > 200) {
    $('.sideBar').css('position','fixed');
    $('.sideBar').css('top','0');
 }

 else if ($(window).scrollTop() <= 200) {
    $('.sideBar').css('position','');
    $('.sideBar').css('top','');
 }
    if ($('.sideBar').offset().top + $(".sideBar").height() > $(".footer").offset().top) {
        $('.sideBar').css('top',-($(".sideBar").offset().top + $(".sideBar").height() - $(".footer").offset().top));
    }
});
});
