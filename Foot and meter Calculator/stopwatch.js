var sw = {
  // (A) INITIALIZE
  etime : null, // HTML time display
  erst : null, // HTML reset button
  ego : null, // HTML start/stop button
  init : function () {
    // (A1) GET HTML ELEMENTS
    sw.etime = document.getElementById("sw-time");
// sw.erst = document.getElementById("sw-rst");
    sw.ego = document.getElementById("sw-go");

    // (A2) ENABLE BUTTON CONTROLS
    sw.ego.addEventListener("click", sw.start);
    sw.ego.disabled = false;
  },

  // (B) TIMER ACTION
  timer : null, // timer object
  now : 0, // current elapsed time
  tick : function () {
    // (B1) CALCULATE HOURS, MINS, SECONDS
    sw.now++;
    var remain = sw.now;
    var mins = Math.floor(remain / 6000);
    remain -= mins * 6000;
      
    var secs= Math.floor(remain / 10);
    remain -= secs * 10;
    // var secs = remain;
      
   // var ten = Math.floor(remain / 10) 
    // remain -= ten * 10;
    var ten = remain;
   // remain -= ten;  


    // (B2) UPDATE THE DISPLAY TIMER
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    if (ten<10) { ten = "" + ten; }
    sw.etime.innerHTML = secs + ":" + ten;
      
      // var var1 = sw.now / 10;
    // console.log(16 * (var1 *var1));
  },
    
  // (C) START!
  start : function () {
    sw.timer = setInterval(sw.tick, 100);
    sw.ego.value = "Stop";
    sw.ego.removeEventListener("click", sw.start);
    sw.ego.addEventListener("click", sw.stop);
 

      
  },

//   (D) STOP
    stop  : function () {
        
        // function
    console.log("Final time");
    var var1 = sw.now / 10;    
    console.log(16 * (var1 *var1));
    var result = (16 * (var1 *var1));           
    var rounding = result.toFixed(2);
    document.getElementById("result").value = rounding; 
        
    var Meters = (rounding * 0.3048).toFixed(2);  
    document.getElementById("result2").value = Meters;
    console.log(Meters);  
        
    document.getElementById("time").value = var1;    
        
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", sw.start);
    sw.ego.addEventListener("click", sw.reset);     
              
          if (sw.timer != null) { sw.stop(); }
    sw.now = -1;
    sw.tick();
        
 },

  // (E) RESET

};

function reset() {
    document.getElementById("time").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("result2").value = 0;
}
window.addEventListener("load", sw.init);


