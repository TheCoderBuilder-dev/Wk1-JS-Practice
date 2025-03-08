function speedDetector(speed) {
  const speedLimit = 60;
  if (speed < speedLimit) {
      console.log("Ok");
  } else {
      let points = Math.floor((speed - speedLimit) / 5);
      if (points > 12) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${points}`);
      }
  }
}

speedDetector(90); 
