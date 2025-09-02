$(function(){
    let header=$("#header");
    let header_top=$("#header-top");
    let headerHeight=header.height();
    let scrollPos=$(window).scrollTop();

    $(window).on("scroll", function(){
        scrollPos=$(this).scrollTop();
        if (scrollPos>headerHeight) {
            header_top.addClass("fixed");
        }
        else {
            header_top.removeClass("fixed");
        }
        console.log(scrollPos);
    });

});