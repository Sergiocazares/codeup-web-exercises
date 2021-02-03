'use strict'

$(document).ready(function (){
    // var idContents = $('#container').html();
    // alert(idContents);
    // $('.codeup').css("border","red solid 1px");
    // $('li').css("font-size","20px");
    //
    // $('h1 , li , p').css("color", "purple");
    //
    // var h1Contents = $("h1").html();
    // alert(h1Contents);
    // alert("Dom Ready!")

    $("h1").click(function(){
        $(this).css("background-color", "red");
    });

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    })

    $("li").hover(
        function () {
            $(this).css("color","red");
        },
        function () {
            $(this).css("color","black");
        }


    );
});

