$(document).ready (function (){
    var scoreCounter = 0;
    var wins = 1;

    // start button on click, game numbers reset
    $('#start').on('click', function startPlay (){
        $('.scoreCounter').empty();

        var randomNumber = Math.floor(Math.random()*100);
        $('.gameScore').html(randomNumber);

        //generate value of each crystal per game
        var crystalOne = Math.floor((Math.random() * 10) + 1);
        var crystalTwo = Math.floor((Math.random() * 10) + 1);
        var crystalThree = Math.floor((Math.random() * 10) + 1);
        var crystalFour = Math.floor((Math.random() * 10) + 1);

        function scoreCheck()
        {
           if (scoreCounter == randomNumber){
                    alert("You have placated the Ancient Dieties... this time");
                    $('.winCounter').html(wins++);
                    $('.scoreCounter').html(scoreCounter);
            } else if (scoreCounter > randomNumber){
                    alert("You are doomed to be trapped in the Eternal Palace forever...");
                    $('.scoreCounter').html(scoreCounter);
            }
        };
        //on click of each crystal, add value
        $('#crystalOne').click(function() {
            $('.scoreCounter').html(scoreCounter+=crystalOne);
            scoreCheck();
        });

        $('#crystalTwo').click(function() {
            $('.scoreCounter').html(scoreCounter+=crystalTwo);
            scoreCheck();
        });

        $('#crystalThree').click(function() {
            $('.scoreCounter').html(scoreCounter+=crystalThree);
            scoreCheck();
        });

        $('#crystalFour').click(function() {
            $('.scoreCounter').html(scoreCounter+=crystalFour);
            scoreCheck();
        });




    });
    // $('#playAgain').on('click', function reset(){
    //     $('.scoreCounter').empty;
    // });

//to-dos:
//win counter not updating properly - fix
// buggy on reset function

});