/*The addEventListener() method is used to attach an 
event handler to an element without overwriting existing event handlers. 
It allows multiple event listeners on the same element.*/

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});