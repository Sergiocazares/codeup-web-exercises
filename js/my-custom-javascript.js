$(document).ready(function (){
    var idContents = $('#container').html();
    alert(idContents);
    $('.codeup').css("border","red solid 1px");
    $('li').css("font-size","20px");

    $('h1 , li , p').css("color", "purple");

    var h1Contents = $("h1").html();
    alert(h1Contents);
    alert("Dom Ready!")
})