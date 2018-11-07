window.onload = () => {
    const functionCalls = document.getElementById("function-calls");
    const callUserInput = document.getElementById("call-user-input");

    functionCalls.onclick = () => {
        simpleFunction(); 
        functionParameters("many functions take parameters");
        functionReturn();
        const returnValue = functionReturn();
        console.log(returnValue);
        const functionParametersParagraph = document.getElementById('function-return');
        functionParametersParagraph.textContent = returnValue;
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementByID("show-user-input");
        const userInput = document.getElementById("user-input");
        userInputParagraph.textContent = userInput.value;
    }
}

function simpleFunction() {
    const displayText = "functions should consist of statements designed to perform a simple task"
    const simpleFunctionParagraph = document.getElementById('simple-function');
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}

function functionParameters(Value) { 
    const functionParametersParagraph = document.getElementById('function-parameters');
    console.log(Value)
    functionParametersParagraph.textContent = Value;
}

function functionReturn() {
    return "many functions return values";
}