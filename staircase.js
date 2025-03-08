// Function to generate a staircase pattern of '#' based on input 'n'
function steps(n) {
  // Loop through from 1 to n (number of steps)
  for (let i = 1; i <= n; i++) {
      // Print '#' repeated 'i' times to create a step
      console.log("#".repeat(i));
  }
}

// Example: Generate a staircase of 3 steps
steps(3);
