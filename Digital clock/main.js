setInterval(function () {
    let localTime = new Date();
    $("#time").text(localTime.toLocaleTimeString());
    $("#date")  .text(localTime.toLocaleDateString());
}, 1000);



