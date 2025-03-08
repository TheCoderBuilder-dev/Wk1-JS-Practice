// Function to determine and display a student's grade based on their marks
function gradeGenerator() {
    // Prompt the user to enter student marks (between 0 and 100)
    let marks = prompt("Enter student marks (0-100):");

    // Convert input to a number
    marks = Number(marks);

    // Check and assign grades based on marks 
    if (marks > 79) {
        console.log("Grade: A"); // 80-100
    } else if (marks >= 60) {
        console.log("Grade: B"); // 60-79
    } else if (marks >= 50) {
        console.log("Grade: C"); // 50-59
    } else if (marks >= 40) {
        console.log("Grade: D"); // 40-49
    } else {
        console.log("Grade: E"); // Below 40
    }
}

// Call the function to execute the grade check
gradeGenerator();
