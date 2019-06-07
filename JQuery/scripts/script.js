$(function(){
    console.log("ready!");

    player = 'X';
    gana = false;

    $(".square").click(function(event){
        if ( $(this).children().length == 0) {
            $(this).append('<div class = "tictoe"><p class ="tics" >'+ player +'</p></div>');
            if(ganoAlguien()) {
                setTimeout(function () {
                    window.location.reload(1);
                }, 2000);
                $("#title").after("<p>Gano "+ player + "</p>");
            }
            cambioJugador();
           
        }
        else
        {
            console.log("Ya elegido");
        }
    });

   
    /*$(".square").mouseenter(function(event){
        $(player).fadeIn(slow);
    });
   

    $('button').click(function(event){
        
        if(ganoAlguien()){
            console.log("Si");
        }
        else {
            console.log("no");
        }
    })*/

    function cambioJugador(){
        if (player == 'X'){
            player = 'O';
            console.log("Cambio jugador a O");
        }
        else {
            player = 'X';
            console.log("Cambio jugador a X");
        }
    }

    function ganoAlguien(){
       if(ganadorHorizontal1()|| ganadorHorizontal2() || ganadorHorizontal3()||ganadorVertical1()||ganadorVertical2()||ganadorVertical3()
       || ganadorDiagonal1() || ganadorDiagonal2()){
           return true;
       }
       else {
           return false;
       }

    }

    function ganadorHorizontal1(){
        if($('#one').text() ==  $('#two').text() && $('#two').text() ==  $('#three').text() && $('#one').children().length > 0){
            return true;
        }
        else {
            return false;
        }

    }

    function ganadorHorizontal2(){
        if($('#four').text() ==  $('#five').text() && $('#five').text() ==  $('#six').text() && $('#four').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }
    function ganadorHorizontal3(){
        if($('#seven').text() ==  $('#eight').text() && $('#eight').text() ==  $('#nine').text() && $('#seven').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    function ganadorVertical1(){
        if($('#one').text() ==  $('#four').text() && $('#four').text() ==  $('#seven').text() && $('#one').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    function ganadorVertical2(){
        if($('#two').text() ==  $('#five').text() && $('#five').text() ==  $('#eight').text() && $('#two').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    function ganadorVertical3(){
        if($('#three').text() ==  $('#six').text() && $('#six').text() ==  $('#nine').text() && $('#three').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    function ganadorDiagonal1(){
        if($('#one').text() ==  $('#five').text() && $('#five').text() ==  $('#nine').text() && $('#one').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    function ganadorDiagonal2(){
        if($('#three').text() ==  $('#five').text() && $('#five').text() ==  $('#seven').text() && $('#three').children().length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    
});

