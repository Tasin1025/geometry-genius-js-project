function TriangleAreaCalculate() {
    // getting field value
    const baseField = document.getElementById("triangle-base");
    const baseValue = parseFloat(baseField.value);

    const heightField = document.getElementById("triangle-height");
    const heightValue = parseFloat(heightField.value);
    
    // calculating area
    const area = 0.5 * baseValue * heightValue ;
    
    // updating area label
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;

    addResultTOEntry("Triangle", area);
}

function RectangleAreaCalculate(){
    // getting field value
    const widthField = document.getElementById("rectangle-width");
    const widthValue = parseFloat(widthField.value);

    const lengthField = document.getElementById("rectangle-length")
    const lengthValue = parseFloat(lengthField.value);

    // calculating area 
    const area = widthValue * lengthValue;
    // updating area label
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;

    addResultTOEntry("Rectangle", area);
}

// making reusable function to reduce duplicate codes
function parallelogramAreaCalculate(){
    // using function
    const base = getInputValue("Parallelogram-base");
    const height = getInputValue("Parallelogram-height");

    // not using function
    const area = base * height
    const areaSpan = document.getElementById("Parallelogram-area");
    areaSpan.innerText = area;

    addResultTOEntry("Parallelogram", area);
}


function rhombusAreaCalculate(){
    const area = getInputValue("rhombus-d1") * getInputValue("rhombus-d2") * 0.5 ;

    // validating fields are blank or not
    if(isNaN(getInputValue("rhombus-d1") || getInputValue("rhombus-d2") )){
        alert ("Enter Valid NUMBERS ");
        return;
    }

    setLabelText("rhombus-area",area);
    addResultTOEntry("Rhombus", area);
    
}


// reusable code -> input value from field using id
function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseFloat(inputField.value);
    return inputValue ;
}

// reusable code -> setting label with area result 
function setLabelText(idName,result){
    const areaSpan = document.getElementById(idName);
    areaSpan.innerText = result;
}

//  function to add the result in main area field
function addResultTOEntry(areaType,area){

    // getting the element to add HTML
    const calculationEntry = document.getElementById("calculation-entry");
    
    //create element 
    const p = document.createElement("p");

    // keeping element count
    const count = calculationEntry.childElementCount;

    // adding class for spacing
    p.classList.add("my-4");

    // now , write element 
    p.innerHTML = `${count +1 }.  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ml-2"> Convert </button> `;
    
    // append the new written list
    calculationEntry.appendChild(p);  

}