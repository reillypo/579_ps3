/*
* Excercise 1
*
*/
const clicker = document.getElementById("color-block");
// clicker.onclick = changeColor
const x = document.getElementById("color-name");
/*
* Then write a function that changes the text and the color inside the div
*
*/
clicker.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(x.innerHTML === "#F08080"){
        // console.log(clicker.style.backgroundColor)

        //change the background color using JS
        clicker.style.backgroundColor = "#FF5733";
        //Change the text of the color using the span id color-name
        x.innerHTML = "#FF5733";

    }
    else{
        //change the background color using JS
        clicker.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        x.innerHTML = "#F08080";

    }
}
// clicker.onclick = changeColor;

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const btn = document.getElementById("convertbtn");
const output_num = document.getElementById("c-output");
btn.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let number = document.getElementById("f-input").value;
    calculated_num = (number - 32) * 5/9;
    //Send the calculated temperature to HTML
    output_num.innerHTML = calculated_num;
}


