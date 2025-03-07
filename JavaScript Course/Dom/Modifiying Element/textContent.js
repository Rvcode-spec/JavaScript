/*The textContent property is used to get or set the text content of an element.
 Unlike innerHTML, it does not interpret HTML, and unlike innerText, 
 it retrieves all text, even hidden elements.*/

 function changeText() {
    // Select the div with id "content"
    let div = document.getElementById("content");

    // Change the text content
    div.textContent = "New Text Content!";
}