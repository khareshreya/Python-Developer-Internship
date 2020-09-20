let employee={
  salary: 100000,
  getCadre: function(){
    if (employee.salary >= payGrades.entryLevel.minSalary && employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (employee.salary >= payGrades.midLevel.minSalary && employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  },
  calculateTax: function() {
    return payGrades[employee.getCadre()].taxMultiplier * employee.salary;
  },
  getBenefits: function() {
    return payGrades[employee.getCadre()].benefits.join(', ');
  },
  calculateBonus: function() {
    return .02 * employee.salary;
  },

  reimbursementEligibility: function() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0;
    let employeeBenefits = payGrades[employee.getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  }
}


let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

function getCadre() {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
  return .02 * salary;
}

function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}
export default employee;
