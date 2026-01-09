function calculateEMI() {
    let loan = document.getElementById("loanAmount").value;
    let rate = document.getElementById("interestRate").value;
    let tenure = document.getElementById("tenure").value;

    let monthlyRate = rate / 12 / 100;

    let emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
              (Math.pow(1 + monthlyRate, tenure) - 1);

    let totalAmount = emi * tenure;
    let totalInterest = totalAmount - loan;

    document.getElementById("emi").innerText = emi.toFixed(2);
    document.getElementById("totalInterest").innerText = totalInterest.toFixed(2);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}
