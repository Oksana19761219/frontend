let ulElement = document.querySelector('ul');
let newListElement = document.createElement('li');
let text = document.createTextNode('Mūsų produktai');
newListElement.appendChild(text);
newListElement.style.fontSize = '36px';
newListElement.style.padding = '24px';
ulElement.appendChild(newListElement);



let newDiv1 = document.createElement('div');
newDiv1.innerHTML = 'Exampe with innerHTML'
document.querySelector('.container').appendChild(newDiv1);

let newDiv2 = document.createElement('div');
newDiv2.textContent = 'Example with textContent';
document.querySelector('.container').appendChild(newDiv2);

let newDiv3 = document.createElement('div');
let appendChild = document.createTextNode('Example with appendChild');
newDiv3.appendChild(appendChild);
document.querySelector('.container').appendChild(newDiv3);

