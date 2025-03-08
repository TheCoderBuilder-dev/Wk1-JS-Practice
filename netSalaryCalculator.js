function netSalaryCalculator(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  
  // Dummy tax rates (replace with real values)
  const tax = grossSalary * 0.11;
  const nhif = grossSalary * 0.12;
  const nssf = grossSalary * 0.16;

  const netSalary = grossSalary - (tax + nhif + nssf);

  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Tax: ${tax}`);
  console.log(`NHIF Deduction: ${nhif}`);
  console.log(`NSSF Deduction: ${nssf}`);
  console.log(`Net Salary: ${netSalary}`);
}

netSalaryCalculator(50000, 5000); 