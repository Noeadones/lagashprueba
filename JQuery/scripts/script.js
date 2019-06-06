$(function(){
    console.log("ready!");

    player = 'X';
    gana = false;

    $(".square").click(function(event){
        if ( $(this).children().length == 0) {
            $(this).append('<div class = "tictoe"><p class ="tics" >'+ player +'</p></div>');
            cambioJugador();
        }
        else
        {
            console.log("Ya elegido");
        }
    });

    $('button').click(function(event){
        
        if(ganaX()){
            console.log("Si");
        }
        else {
            console.log("no");
        }
    })

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

    function ganaX(){
       if( $('#one').text() ==  $('#two').text() && $('#two').text() ==  $('#three').text() && $('#one').children().length > 0){
           return true;
       }
       else {
           return false;
       }

    }


});

