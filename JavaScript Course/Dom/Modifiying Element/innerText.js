/*


The innerText property is used to get
 or set the visible text inside an element. 
 Unlike innerHTML, it treats text as plain text and does not interpret HTML.


*/

function changeText() {
    // Select the div with id "content"
    let div = document.getElementById("content");

    // Change the text content
    div.innerText = "New Text Content!";
}