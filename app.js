// const listItemElements  = document.querySelectorAll('li'); 

const listItemElements = document.getElementsByTagName('li');

// returns a collection of element child nodes
console.log(listItemElements); // HTMLCollection


const h1 = document.getElementById('main-title');
h1.textContent = 'some new content'; 
h1.style.background = 'yellow'; 
h1.style.color = 'black'; 

const li = document.querySelector('ul li:last-of-type');
li.textContent = li.textContent + '(changed)';

// const body = document.body; 
// console.log(body); 

for(const listItemEl of listItemElements) {
  console.log(listItemEl);
}

// const secondListItem = document.getElementsByClassName('list-item');
// console.log(secondListItem); 

// const ul = document.querySelector('ul'); 
// console.log(ul.children);

const ul = document.querySelector('ul');
const lastListItem = ul.querySelector('ul li:last-of-type'); 
console.log(lastListItem);

const firstElementChild  = ul.firstElementChild; 
console.log(firstElementChild); 

const lastElementChild = ul.lastElementChild; 
console.log(lastElementChild);


const liFirst = document.querySelector('li'); 
const parentElement = liFirst.parentElement; 


// select the ancestor element
console.log(liFirst.closest('ul'));

//choose the parent 
const parentUl = lastElementChild.parentElement; 
console.log(parentUl); 


// select the previous element sibling
// const parentElement = parentUl.closest('.red-bg'); 
// const ulParentSection = parentUl.parentElement; 
// console.log(ulParentSection);

// select the next element sibling 
// const nextElementSibling = parentUl.nextElementSibling; 
// console.log(nextElementSibling);

const section = document.querySelector('section'); 
// section.className = '';
// section.style.backgroundColor = 'green'; 

const btn = document.querySelector('button'); 
let toggle = false; 
btn.addEventListener('click', () => {
  // if(!toggle) {
  //   toggle = true; 
  //   section.className = 'red-bg visible';
  // }
  // else {
  //   toggle = false;
  //   section.className = 'red-bg invisible'; 
  // }
  // console.log('click');
  // console.log(section.classList.contains('red-bg'));
  section.classList.contains('red-bg') ? '' : 'red-bg'; 
  section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

