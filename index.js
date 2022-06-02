// Write your code here!

// Removes the <main> with #main
const main = document.querySelector('#main');
main.remove();

// Create a hi#victory node stored in newHeader variable.
const newHeader = document.createElement('h1');
newHeader.id = "victory";


// textContent of newHeader node to be "YOUR_NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// I guess we should append the element to the body
document.body.append(newHeader)