/*

Event Bubbling & Capturing in JavaScript
When an event occurs on an element inside 
another element, both elements may respond to the event. 
This is called event propagation, and it happens in two phases:

Event Bubbling (Default) → The event starts from the target 
element and moves up to its ancestors.

Event Capturing (Trickling) → The event starts from the top 
ancestor and moves down to the target element.

*/





// Bubbling Phase (Default) - Event moves UP from child to parent
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Clicked!");
});

document.getElementById("child").addEventListener("click", function() {
    alert("Child Clicked!");
});

// Capturing Phase - Event moves 