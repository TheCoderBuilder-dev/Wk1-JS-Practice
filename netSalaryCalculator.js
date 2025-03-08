// Function to calculate PAYE tax based on salary brackets
function calculatePAYE(grossSalary) {
  let tax = 0;

  if (grossSalary <= 24000) {
      tax = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
      tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
  } else if (grossSalary <= 500000) {
      tax = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3);
  } else if (grossSalary <= 800000) {
      tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((grossSalary - 500000) * 0.325);
  } else {
      tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
  }

  return tax;
}

// Function to calculate NHIF (SHIF) deduction (2.75% of Gross Salary)
function calculateNHIF(grossSalary) {
  return grossSalary * 0.0275;
}

// Function to calculate NSSF deduction (6% of Gross Salary, capped at 72,000)
function calculateNSSF(grossSalary) {
  return Math.min(grossSalary, 72000) * 0.06;
}

// Main function to calculate net salary
function netSalaryCalculator() {
  let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
  let benefits = parseFloat(prompt("Enter Benefits:"));

  if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter valid numbers.");
      return;
  }

  let grossSalary = basicSalary + benefits; // Total before deductions

  let paye = calculatePAYE(grossSalary);  // PAYE Tax
  let nhif = calculateNHIF(grossSalary);  // NHIF (SHIF) Contribution
  let nssf = calculateNSSF(grossSalary);  // NSSF Contribution

  let totalDeductions = paye + nhif + nssf; // Sum of all deductions
  let netSalary = grossSalary - totalDeductions; // Final salary after deductions

  // Print results
  console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
  console.log(`PAYE Tax: Ksh ${paye.toFixed(2)}`);
  console.log(`NHIF Deduction: Ksh ${nhif.toFixed(2)}`);
  console.log(`NSSF Deduction: Ksh ${nssf.toFixed(2)}`);
  console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// Run the program
netSalaryCalculator();
