const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

container.appendChild(p);

const header = document.createElement('h3');
header.classList.add('h3');
header.textContent = "I'm a blue h3!";
header.style.color = 'blue';

container.appendChild(header);

const box = document.createElement('div');
box.classList.add('box');
box.style.backgroundColor = 'pink';
box.style.borderColor = 'black';
box.style.border = 'solid';

const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent = "I'm a div";

const p2 = document.createElement('p2');
p2.classList.add('p2');
p2.textContent = "ME TOO!";

box.appendChild(header1);
box.appendChild(p2);

container.appendChild(box);