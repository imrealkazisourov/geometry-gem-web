function triangleCalculateArea() {
    // getting triangle base value. 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    //converting string into float number. 
    const triangleBase = parseFloat(triangleBaseText);

    //getting triangle height value.
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;

    const triangleHeight = parseFloat(triangleHeightText);

    // Calculating Area Of Triangle 
    const triangleArea = 0.5 * triangleBase * triangleHeight;

    // Display Area Of Triangle 

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;


}