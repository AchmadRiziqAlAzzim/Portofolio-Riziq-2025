function Time() {
    const Jam = new Date().getHours();
    const bg = document.getElementById("bg");

    if (Jam >= 6 && Jam <= 14) {
        bg.style.backgroundColor = "#00BFFF"
    } else if (Jam < 15 || Jam <= 17){
        bg.style.backgroundColor = "#FF5E62"
    } else if (Jam >= 18 && Jam <= 24) {
        bg.style.backgroundColor = "#191970"
    } 
}

Time()

setInterval(Time, 1000)