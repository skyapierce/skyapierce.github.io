window.onload = () => {

    const feetToInchesAction = 
        document.getElementById('feet-to-inches-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

    const milesToFeetAction = 
        document.getElementById('miles-to-feet-action');

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('miles-to-feet-input');
        const milesToFeetDisplay = document.getElementById('miles-to-feet-display');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    };

    const areaOfTriangleAction = 
        document.getElementById('area-Of-Triangle-action');

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInput = document.getElementById('area-Of-Triangle-input1');
        
        const areaOfTriangleDisplay = document.getElementById('area-Of-Triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value);
    };

    

    const areaOfTriangleAction2 =
    document.getElementById('area-Of-Triangle-action');

    areaOfTriangleAction2.onclick = () => {
        const areaOfTriangleInput = document.getElementById('area-Of-Triangle-input2');
        
        const areaOfTriangleDisplay = document.getElementById('area-Of-Triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value);
    };
    
    const areaOfCircleAction = 
        document.getElementById('area-Of-Circle-action');

    areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('area-Of-Circle-input');
        const areaOfCircleDisplay = document.getElementById('area-Of-Circle-display');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    };
};

const feetToInches = (feet) => {
    return feet * 12;
}

const milesToFeet = (miles) => {
    return miles * 5280;
}

const areaOfTriangle = (base, height) => {
    return (base * height / 2);
}

const areaOfCircle = (radius) => {
    return Math.PI * radius * radius;
}