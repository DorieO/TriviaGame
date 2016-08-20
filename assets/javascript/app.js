// Need if else statements for firstAnswers, secondAnswers, thirdAnswers
// for loop 
//alerts
//calculate score



<script type="text/javascript">
 
window.setTimeout("Tick()", 1000);
var Timer;
var TotalSeconds;
 
function CreateTimer(TimerID, Time) {
    Timer = document.getElementById(TimerID);
    TotalSeconds = Time;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}
 
function Tick() {
    if (TotalSeconds <= 0) {
        alert("Time's up!")
        return;
    }
    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}