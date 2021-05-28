// event listeners for button click
//Calculate event listener
document.querySelector(".calculate").addEventListener("click", BMI)

//Clear event listener
document.querySelector(".clear").addEventListener("click", Clear)

// functions[BMI calculation + clear]

// Calculate function (BMI)
function BMI() {
    //height and weight variables
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // BMI Formula
    let index = (weight / (((height / 100) * height) / 100)).toFixed(0);

    // Condition to check if height and weight are not equal to zero
    if (height && weight != 0) {
        const output = document.getElementById("output");
        const state = document.getElementById("state");
        output.innerHTML = "Your BMI is " + index;
        if (index < 15) {
            state.innerHTML = "<span style='color:yellow';> Very Severly Underweight!"
        } else if (index < 16) {
            state.innerHTML = "<span style='color:yellow';> Severly Underweight!"
        } else if (index < 18.5) {
            state.innerHTML = "<span style='color:yellow';> Underweight!"
        } else if (index < 25) {
            state.innerHTML = "<span style='color:black';> Healthy Weight(Normal)"
        } else if (index < 30) {
            state.innerHTML = "<span style='color:red';> Overweight!"
        } else if (index < 35) {
            state.innerHTML = "<span style='color:#C0392B';> Moderate Obese(Obese Class I)"
        } else if (index < 40) {
            state.innerHTML = "<span style='color:#C0392B';> Severely Obessed(Obese Class II)"
        }
    } else {
        alert('Error!')
    }
}

// Clear function
function clear() {
    document.getElementById('height').innerHTML = "";
    document.getElementById('weight').innerHTML = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('state').innerHTML = "";
}