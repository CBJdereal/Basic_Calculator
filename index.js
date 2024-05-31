const display = document.getElementById('display');
const specialImage = document.getElementById('specialImage');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
    specialImage.style.display = 'none'; // Hide image when clearing display
}

function calculate(){
    try{
        if (display.value.trim() === '9/11') { // No spaces between the numbers and operator
            specialImage.style.display = 'block'; // Show the image
            display.value = ''; // Optionally clear the display
        } else {
            display.value = eval(display.value);
        }
    }
    catch(error){
        display.value = 'Error';
    }
}
