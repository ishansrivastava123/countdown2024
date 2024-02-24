const dt = "31 Dec 2024 11:59:59 PM";
document.getElementById("end-date").innerHTML = dt;

const clock = () => {
    var end = new Date(dt);
    var now = new Date();
    var diff = end - now;
    console.log(end);
    console.log(now);
    
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff = diff % (1000 * 60 * 60 * 24);
    var hours = Math.floor((diff) / (1000 * 60 * 60));
    diff = diff % (1000 * 60 * 60);
    var minutes = Math.floor(diff / (1000 * 60));
    diff = diff % (1000 * 60);
    var seconds = Math.floor(diff / 1000);

    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;

    // console.log("Days: " + days);
    // console.log("Hours: " + hours);
    // console.log("Minutes: " + minutes);
    // console.log("Seconds: " + seconds);
}

setInterval(() => {
    clock();
}, 1000);
