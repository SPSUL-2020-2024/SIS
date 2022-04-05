$(function () {
    //animate loading text
    $(".loading").animate({ left: '+=100' }, 500);

    //On image loaded, remove loading text
    $("#image").load(function () { $(".loading").remove() });
});