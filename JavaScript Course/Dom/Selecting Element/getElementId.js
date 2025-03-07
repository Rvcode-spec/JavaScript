/*
The getElementById() method is used to select an HTML 
element by its id. It returns a reference to the element, 
which you can use to manipulate its content, style, or other properties.

*/

function changeText() {
    // Get the element with id "heading"
    let heading = document.getElementById("heading");
    
    // Change the text content
    heading.textContent = "Text Changed!";
}