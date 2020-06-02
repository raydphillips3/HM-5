//variables
var timeCode = "";
var rip = '';
var timeTag = [];
var timeGone = [];
var nowTime = [];
var compare1;
var compare2;
var dateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");


//Cycle through every timeblock

//Store messages locally and display immediately
memo = localStorage.getItem("message");
//console.log(memo);
$("#now").text(dateTime);




//****************************************************************************
//refresh time display every millisecond
interval = setInterval(function () {
    let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    console.log(dateTime);

    $("#now").text(dateTime);

    //Change textarea to gray once the hour has passed and red during the current hour
    for (i = 0; i < 10; i++) {
        var rip = $("div#time");
        console.log(rip);
        console.log(rip[i].innerHTML);
        timeCode = rip[i].innerHTML;

        timeTag = timeCode.split(" ");
        console.log(timeTag);
        timeGone = dateTime.split(" ");
        console.log(timeGone);
        nowTime = [timeGone[4], timeGone[5]];
        console.log(nowTime);
        //------------------------------------------------------------------------------
        if (timeTag[0] === "12:00") {
            compare1 = 12;
            console.log(compare1);
        }
        if (nowTime[0] === "12:00") {
            compare2 = 0 + b;
            console.log(compare2);
        }
        if (timeTag[1] === "pm") {
            var a = 12;
        } else {
            var a = 0
        } console.log(a);
        if (nowTime[1] === "pm") {
            var b = 12;
        } else {
            var b = 0
        } console.log(b);


        compare1 = parseInt(timeTag[0]) + a;
        compare2 = parseInt(nowTime[0]) + b;

        console.log(compare1);
        console.log(compare2);
        
        
        
        
        console.log("This is the decider " + (compare1 - compare2));
        var spur = $(".form-control");
        console.log(spur);
        console.log(spur[i]);
        var colorChange = (spur[i])
        
        
        if ((compare1 - compare2) === 0) {
            $(colorChange).css("background-color", "red");
            $(colorChange).css("color", "white");
            console.log("This is the decider " + (compare1 - compare2));
            console.log("This should be red!");
            console.log($(spur[i]).css("background-color", "red"));
        };
        if ((compare1 - compare2) < 0) {
            $((spur[i])).css("background-color", "rgb(199, 199, 199)");
            console.log("This is the decider " + (compare1 - compare2));
            console.log("This should be gray!");
        };
        
        console.log("---------------------------------------------------");
    }


}, 1);
//****************************************************************************



//Input and save memos 
//Timeblock 0
$("#comment-0").text(localStorage.getItem("message0"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo0 = $("#comment-0").val();
    console.log(memo);
    localStorage.setItem("message0", memo0);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 1
$("#comment-1").text(localStorage.getItem("message1"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo1 = $("#comment-1").val();
    localStorage.setItem("message1", memo1);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 2
$("#comment-2").text(localStorage.getItem("message2"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo2 = $("#comment-2").val();
    localStorage.setItem("message2", memo2);
    // Preventng the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 3
$("#comment-3").text(localStorage.getItem("message3"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo3 = $("#comment-3").val();
    localStorage.setItem("message3", memo3);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 4
$("#comment-4").text(localStorage.getItem("message4"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo4 = $("#comment-4").val();
    localStorage.setItem("message4", memo4);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 5
$("#comment-5").text(localStorage.getItem("message5"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo5 = $("#comment-5").val();
    localStorage.setItem("message5", memo5);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 6
$("#comment-6").text(localStorage.getItem("message6"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo6 = $("#comment-6").val();
    localStorage.setItem("message6", memo6);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 7
$("#comment-7").text(localStorage.getItem("message7"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo7 = $("#comment-7").val();
    localStorage.setItem("message7", memo7);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});

//Timeblock 8
$("#comment-8").text(localStorage.getItem("message8"));
$(".btn").on("click", function (event) {
    console.log("WorKing!");
    // Here we grab the text from the input box
    var memo8 = $("#comment-8").val();
    localStorage.setItem("message8", memo8);
    // Preventing the save button from trying to submit the form
    event.preventDefault();
});