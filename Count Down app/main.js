let countDown ;
let countDown2;
let countDownUserInput=0;
let timer ;
let  countset = 0 ;

$(".addSec").on("click", function(){
    countset+=5;
    $("#count").text(countset);
});
$(".userInputSec").on("click", function(){

     input = prompt("Enter your second:");
    countDownUserInput= parseInt(input);
    $("#count").text(countDownUserInput);
})


$(".start").on("click" , function() {

    

    countDown= countset;
    countDown2=countDownUserInput;


    timer = setInterval(function () {
    
        if (countDown >= 0) {
            $("#count").text(countDown);
            countDown-- ;
        }   
       else if (countDown2 >= 0) {
            $("#count").text(countDown2);
            countDown2-- ;
        }   
        else
        {
            clearInterval(timer);
        }

     
    }, 1000);
});



