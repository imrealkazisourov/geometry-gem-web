//Universal Function of getting value by id
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// Universal Function for setting Inner Text
function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Calculating Area Of Triangle 

function triangleCalculateArea(){
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    setInnerText('triangle-area', triangleArea);
}
// Calculating Area Of Rectangle 

function rectangleCalculateArea(){
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    const rectangleArea = rectangleWidth * rectangleLength;
    setInnerText('rectangle-area', rectangleArea);
}


