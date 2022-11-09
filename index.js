// Write your code here!
const body = document.getElementsByTagName('body')[0];
let main = document.getElementById('main');
body.removeChild(main);

const newHeader = document.createElement('h1');

newHeader.setAttribute("id", 'victory');

newHeader.textContent = "Keenen is the champion";
