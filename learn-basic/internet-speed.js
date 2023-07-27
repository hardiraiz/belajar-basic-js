let arrTimes = []
let i = 0;
let timesToTest = 5;
let tTherhold = 150;
let testImage = "https://images.glints.com/unsafe/360x0/glints-dashboard.s3.amazonaws.com/company-logo/2a235dddf8db79f4f17e651249698281.png";
let dummyImage = new Image();
let isConnectedFast = false;

testLatecy(function(avg){
    isConnectedFast = (avg <= tTherhold);
    document.writeln("Time: " + (avg.toFixed(2)) + "ms - isConnectedFast? " + isConnectedFast);
    // console.log("Time: " + (avg.toFixed(2)) + "ms - isConnectedFast? " + isConnectedFast);
    // return isConnectedFast;
    document.writeln("Status connection: " + isConnectedFast)
});

function testLatecy(cb){
    let tStart = new Date().getTime();
    if (i<timesToTest-1){
        dummyImage.src = testImage + '?t=' + tStart;
        dummyImage.onload = function(){
            let tEnd = new Date().getTime();
            let tTimeTook = tEnd-tStart;
            arrTimes[i] = tTimeTook;
            testLatecy(cb);
            i++;
        };
    } else {
        let sum = arrTimes.reduce(function(a, b){return a + b;});
        let avg = sum / arrTimes.length;
        cb(avg)
    }
}
