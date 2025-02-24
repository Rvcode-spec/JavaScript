function calculateBMI() {
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let heightInInches = (feet * 12) + inches;
    let heightInMeters = heightInInches * 0.0254;
    let bmi = weight / (heightInMeters * heightInMeters);
    
    let result = document.getElementById("result");
    let category = document.getElementById("bmiCategory");

    result.innerHTML = `BMI = ${bmi.toFixed(1)}`;

    if (bmi < 18.5) {
        category.innerHTML = "Underweight";
        category.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 25) {
        category.innerHTML = "Normal weight";
        category.style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
        category.innerHTML = "Overweight";
        category.style.color = "orange";
    } else {
        category.innerHTML = "Obesity";
        category.style.color = "red";
    }
}

function clearFields() {
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("bmiCategory").innerHTML = "";
}
