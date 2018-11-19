/**
 * Curtin University
 * Mobile Application Development
 * Workshop 7
 * Calculator Web-App Code
 */

$(window).on("load", function() {
    $("#btnAdd").on("click", function() {
        calculate('+');
    });
    
    $("#btnSubtract").on("click", function() {
        calculate('-');
    });
    
    $("#btnMultiply").on("click", function() {
        calculate('*');
    });
    
    $("#btnDivide").on("click", function() {
        calculate('/');
    });
})

function calculate(operator) {
    let result = 0;
    let resultString = "";

    // Get input values
    let input1 = parseFloat($("#txtInput1").val());
    let input2 = parseFloat($("#txtInput2").val());

    // Calculate result
    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            // Divide by 0 check
            if (input2 === 0) {
                alert("Cannot divide by 0.")
            }
            else {
                result = input1 / input2;
            }
            break;
        default:
            alert("Error.");
            resultString = "Error";
            break;
    }

    if (isNaN(result)) {
        alert("Missing inputs or somehting.");
    }
    else {
        resultString = result.toString();
    }

    $("#txtResult").val(resultString);
}