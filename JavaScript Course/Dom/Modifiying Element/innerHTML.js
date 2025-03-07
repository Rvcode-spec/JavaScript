// The innerHTML property is used to get or set the HTML content inside an element.

function changeContent() {
    // Select the div with id "content"
    let div = document.getElementById("content");

    // Change the inner HTML content
    div.innerHTML = "<h2>New Content Added!</h2>";
}