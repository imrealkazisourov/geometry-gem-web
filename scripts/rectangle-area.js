function rectangleCalculateArea() {
    // rectangle length 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleText);
    
   
    //rectangle width 

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);
    
    //calculating rectangle area 

    const rectangleArea = rectangleLength * rectangleWidth;

    //display the area of rectangle 
    


}