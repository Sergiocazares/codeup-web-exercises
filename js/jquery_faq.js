$(document).ready(function () {
    $("dd").addClass("invisible");

    $("#styletime").click(function () {
        $("dd").toggleClass("invisible");
    })

    $("#styleUs").click(function (){
        $('li').each(function(index) {
            if (index === 3 || index === 7 || index === 11 || index === 15 || index === 18 || index === 22 || index === 26 || index ===30 || index === 34 || index === 38 ) {
                $(this).css('background-color', '#FF0');
            }
        });
    });

    $("h3").click(function () {
        $(this).next().children().css("font-weight", "bold");
    });

//When any list item is clicked, first li of the parent ul should have a font color of blue.

    $("li").click(function (){
        $(this).parent().children().first().css("color", "blue");
    });

    $("span").click(function(){
        $(this).parent().hide();
    });

    $("h3").click(function(){
        $(this).next().slideToggle();
    });

    $("h2").delay(8000).fadeIn(2000);

});