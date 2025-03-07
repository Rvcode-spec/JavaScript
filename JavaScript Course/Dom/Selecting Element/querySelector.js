/*
he querySelector() method is used to select an 
element using a CSS selector. 
It returns the first matching element in the DOM.
*/

function changeText() {
    // Select the first element with class "title"
    let heading = document.querySelector(".title");
    
    // Change the text content
    heading.textContent = "Text Changed!";
}