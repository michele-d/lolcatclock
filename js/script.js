$(document).ready(function(){  //activates JQuery

var time = new Date().getHours();
var noon = 12; // noon
var evening = 18; // 6pm 
var partyTime = 21; // 9pm
var napTime = 15; // 3pm
var lunchTime = 13; // 1pm
var wakeupTime = 7; 
var messageText;
var isPartyTime = false;
var partyTimeButton = document.getElementById('partyTimeButton');

var updateClock = function() 
{

var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var timeEventJS = document.getElementById("timeEvent");

//DROP DOWN SELECTOR variables
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


if (time == wakeupTime) {
		image = "https://cdn.shopify.com/s/files/1/0344/6469/files/cat_wake_up.jpg?v=1540324410";
		messageText = "Five more minutes, PLEASE";}
else if (time < noon) {
		messageText = "Good Morning!";}
else if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
		messageText = "Party Time!!!!";}
else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "Time for a Snoozzzzz";}
else if (time == lunchTime) {
		image = "https://rlv.zcache.com/taco_cats_space_mouse_pad-r894d4873909e45c883398d415c369142_x74vi_8byvr_704.jpg";
		messageText = "Lunch Time!!! Can we haz TACOS?";}
else if (time >= evening) {
		messageText = "Good Evening!";}
else {
		messageText = "Good Afternoon!";}


console.log(messageText); // Do I still need this now that I've added next line of code?
timeEventJS.innerText = messageText; 
lolcat.src = image;


//Party Time Button function
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
 // text in the button should read "Party Over"
	  partyTimeButton.innerText = "Party Over";
 // color of the button should be "#0A8DAB" (bonus!)
	  partyTimeButton.style.backgroundColor = "#0a8dab";
	   
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
 // text in the button should read "PARTY TIME!"
	  partyTimeButton.innerText = "Party Time!!!";
 // color of the button should be "#222" (bonus!)
	  partyTimeButton.style.backgroundColor = "#222";
   }
};
 
 
//DROP DOWN SELECTOR functions
var wakeUpEvent = function()
{
    wakeupTime = wakeUpTimeSelector.value;
};
	
var lunchTimeEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function()
{
	napTime =napTimeSelector.value;
};


partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);	


//Clock Code Here

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

showCurrentTime();
 
};

updateClock();
var oneSecond = 1000; 
setInterval(updateClock, oneSecond);

});