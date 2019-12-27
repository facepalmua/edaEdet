

function change(objName, min, max, step) {
    var obj = document.getElementById(objName);
    var tmp = +obj.value + step;
    if (tmp<min) tmp=min;
    if (tmp>max) tmp=max;
    obj.value = tmp;
}


$(document).ready(function() {

    $('.product-submenu__header').click(function () {
        console.log('clicked')
        $('.catalog-main-container').toggleClass('show-submenu')
    });

    $(".range-buttons input").on("click", function () {
        $('.range-buttons').addClass('highlighted-range-buttons')
    });

});