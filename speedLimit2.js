let speedLimit = 55;

function amISpeeding(speed) {
    if (speed >= speedLimit) {
        console.log("Yes. You are speeding. Slow down.");
    } else {
        console.log("No. You are not speeding. Move on?");
    }
}

amISpeeding(60);
amISpeeding(45);
amISpeeding(65);
amISpeeding(50);
amISpeeding(57);