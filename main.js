function playBeep() {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // Tần số 1000 Hz
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1); // Dừng sau 0.1 giây
}

if(document.getElementById("ctl00_mainContent_divGrade") !=null){
    setInterval(()=>{
        var wrapper = document.getElementById("ctl00_mainContent_divGrade");
        var list = wrapper.querySelectorAll("table tbody tr");
        for(let i=0;i<list.length;i++){
            if(list[i].textContent.toLowerCase().includes(("Final exam").toLowerCase()) && list[i].textContent.toLowerCase().includes(("Final exam resit").toLowerCase()) == 0){
                var bar = list[i].querySelectorAll("td");
                if(bar[3].textContent != ""){
                    playBeep();     
                }
            }else{
                console.log("Not found result");
            }
        }
    }, 5000);
}else{
    console.log("Not found subject");
}

