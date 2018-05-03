$(document).ready (function (){
    var scoreCounter = 0;
    var wins = 0;

    // start button on click, game numbers reset
    $('#start').on('click', function(){

        var randomNumber = Math.floor(Math.random()*100);
        $('.gameScore').html(randomNumber);

        //generate value of each crystal per game
        var crystalOne = Math.floor((Math.random() * 10) + 1);
        var crystalTwo = Math.floor((Math.random() * 10) + 1);
        var crystalThree = Math.floor((Math.random() * 10) + 1);
        var crystalFour = Math.floor((Math.random() * 10) + 1);

        function scoreCheck()
        {
           if (scoreCounter === randomNumber){
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
            console.log(crystalOne);
            $('.scoreCounter').html(scoreCounter+=crystalOne);
            scoreCheck();
        });

        $('#crystalTwo').click(function() {
            console.log(crystalTwo);
            $('.scoreCounter').html(scoreCounter+=crystalTwo);
            scoreCheck();
        });

        $('#crystalThree').click(function() {
            console.log(crystalThree);
            $('.scoreCounter').html(scoreCounter+=crystalThree);
            scoreCheck();
        });

        $('#crystalFour').click(function() {
            console.log(crystalFour);
            $('.scoreCounter').html(scoreCounter+=crystalFour);
            scoreCheck();
        });


//win counter not updating properly - fix
// score re-set to zero on click again

    });
});