function triangleCalculateArea() {
    // getting triangle base value. 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    //converting string into float number. 
    const base = parseFloat(triangleBaseText);
    console.log(typeof base);

    //getting triangle height value.
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;

    const height = parseFloat(triangleHeightText);
    console.log(typeof height);
}