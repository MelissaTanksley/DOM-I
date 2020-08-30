let tenSec = document.getElementById('secondTens');
let oneSec = document.getElementById('secondOnes');
let msHuns = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');


function timer() {
    let tenSeconds = 0;
    let oneSeconds = 0;
    let msHundred = 0;
    let msTen = 0;

    function init() {
        tenSec.innerHTML = 0;
        oneSec.innerHTML = 0;
        msHuns.innerHTML = 0;
        msTens.innerHTML = 0;
    }
    init();

    function endTimer () {
        if(tenSeconds === 1){
            clearInterval(stopId);
        }
    }

    const stopId = setInterval(updatTimer, 10);
    stopId();

    function updatTimer (){
        msTen += 10;
        if(msTen > 99){
            msHundred += 1
            msTen = 0; 
        }
        if(msHundred > 9){
            oneSeconds += 1;
            msHundred = 0;
        }
        if(oneSeconds > 9) {
            tenSeconds += 1;
            oneSeconds = 0;
        }
        if(tenSeconds === 1) {
            endTimer();
            tenSec.style.color = 'red';
            oneSec.style.color = 'red';
            msHuns.style.color = 'red';
            msTens.style.color = 'red';       
        }

        tenSec.innerHTML = tenSeconds;
        oneSec.innerHTML = oneSeconds;
        msHuns.innerHTML = msHundred;
        msTens.innerHTML = msTen;
    }
}
timer(); 

// playing with a start button

