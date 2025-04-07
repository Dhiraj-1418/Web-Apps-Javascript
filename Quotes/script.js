
let quotes = [
    " Dream big, work hard, stay focused & surround yourself with good people.",
    "Be the change that you wish to see in the world.- Mahatma Gandhi ",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt ",
    "You have to believe in yourself when no one else does."
];

let index = 0;

function changeQuote() {
    $("#quoteBox").fadeOut(500, function() {
        index = (index + 1) % quotes.length;
        $(this).text(quotes[index]).fadeIn(500);
    });
}

setInterval(changeQuote, 2000); //