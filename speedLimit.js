let speedLimit = 55;

function amISpeeding(speed) {
    if (speed >= speedLimit) {
        console.log("Yes. You are speeding.");
    } else {
        console.log("No. You are not speeding. What's wrong with you?");
    }
}

amISpeeding(53);
amISpeeding(72);