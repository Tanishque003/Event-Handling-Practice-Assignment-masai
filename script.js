// Function to change button color on click
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show message on mouseover
function showMessage(event) {
    const messageId = 'message' + event.target.id.charAt(event.target.id.length - 1);
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide message on mouseout
function hideMessage(event) {
    const messageId = 'message' + event.target.id.charAt(event.target.id.length - 1);
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide button on double click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
    button.addEventListener('mouseover', showMessage);
    button.addEventListener('mouseout', hideMessage);
    button.addEventListener('dblclick', hideButton);
});
