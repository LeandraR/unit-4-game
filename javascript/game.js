$(document).ready (function (){

    var numberOptions = [10, 5, 3, 1];

// on click 'try again button', game numbers reset
    $('#tryAgain').on('click', function(){
        var randomNumber = Math.floor(Math.random()*100);
        $('.gameScore').html(randomNumber);

    //assign values to crystals
        for (var i = 0; i < numberOptions.length; i++) {
            $('.crystal-image').attr("data-crystalvalue", numberOptions[i]);
        }

        $('.crystal-image').on('click', function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

    });

});








});