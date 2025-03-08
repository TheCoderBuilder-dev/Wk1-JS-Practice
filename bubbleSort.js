// Function to sort an array using Bubble Sort
function bubbleSort(arr) {
    let n = arr.length; // Get the length of the array

    // Repeat the process for all elements
    for (let i = 0; i < n - 1; i++) {

        // Compare each number with the next one
        for (let j = 0; j < n - i - 1; j++) {
            
            // If the first number is bigger, swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; // Store the first number in a temp variable
                arr[j] = arr[j + 1]; // Move the smaller number to the left
                arr[j + 1] = temp; // Place the bigger number to the right
            }
        }
    }

    return arr; // Return the sorted array
}

// Example usage
console.log(bubbleSort([5, 6, 1, 3, 4, 2])); // Output: [1, 2, 3, 4, 5, 6]
