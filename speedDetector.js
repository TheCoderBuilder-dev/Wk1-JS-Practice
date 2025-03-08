// Function to check a driver's speed and assign demerit points
function speedDetector(speed) {
    const speedLimit = 70; // Set the speed limit to 70 km per h

    // If the speed is within the limit print "Ok"
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points: 1 point for every 5 km/h over the limit
        let points = Math.floor((speed - speedLimit) / 5);

        // If points exceed 12, suspend the license
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`); // Display the number of demerit points
        }
    }
}

// Example : Checking a driver’s speed of 90 km/h
speedDetector(90);
