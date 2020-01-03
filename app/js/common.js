

function change(objName, min, max, step) {
    var obj = document.getElementById(objName);
    var tmp = +obj.value + step;
    if (tmp<min) tmp=min;
    if (tmp>max) tmp=max;
    obj.value = tmp;
}


$(document).ready(function() {

    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").show().click(function() {
        var ind = $(this).index();
        $(".wrapper .tab").removeClass("active").eq(ind).addClass("active");
        $(".tab_item").hide().eq(ind).fadeIn()
    }).eq(0).addClass("active");

    $('.product-submenu__header').click(function () {
        console.log('clicked')
        $('.catalog-main-container').toggleClass('show-submenu')
    });

    $(".range-buttons input").on("click", function () {
        $('.range-buttons').addClass('highlighted-range-buttons')
    });

    $('.product-toggler_1').click(function () {
        console.log('toggler 1');
        $(this).addClass('active-toggler-sidebar');
        $('.product_toggler_2').removeClass('active-toggler-sidebar');
        $('.product-toggler-menu_1').css('display', 'flex');
        $('.product-toggler-menu_2').css('display', 'none');
    });

    $('.product_toggler_2').click(function () {
        console.log('toggler 2');
        $(this).addClass('active-toggler-sidebar');
        $('.product-toggler_1').removeClass('active-toggler-sidebar');
        $('.product-toggler-menu_1').css('display', 'none');
        $('.product-toggler-menu_2').css('display', 'flex');
    })

});