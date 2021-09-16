// // const listItemElements  = document.querySelectorAll('li'); 

// const listItemElements = document.getElementsByTagName('li');

// // returns a collection of element child nodes
// console.log(listItemElements); // HTMLCollection


// const h1 = document.getElementById('main-title');
// h1.textContent = 'some new content'; 
// h1.style.background = 'yellow'; 
// h1.style.color = 'black'; 

// const li = document.querySelector('ul li:last-of-type');
// li.textContent = li.textContent + '(changed)';

// // const body = document.body; 
// // console.log(body); 

// for(const listItemEl of listItemElements) {
//   console.log(listItemEl);
// }

// // const secondListItem = document.getElementsByClassName('list-item');
// // console.log(secondListItem); 

// const ul = document.querySelector('ul'); 
// // console.log(ul.children);

// // const ul = document.querySelector('ul');
// // const lastListItem = ul.querySelector('ul li:last-of-type'); 
// // console.log(lastListItem);

// // const firstElementChild  = ul.firstElementChild; 
// // console.log(firstElementChild); 

// // const lastElementChild = ul.lastElementChild; 
// let lastElementChild = ul.querySelector('ul li:last-of-type');
// // console.log(lastElementChild);


// // const liFirst = document.querySelector('li'); 
// // const parentElement = liFirst.parentElement; 


// // select the ancestor element
// // console.log(liFirst.closest('ul'));

// //choose the parent 
// const parentUl = lastElementChild.parentElement; 
// console.log(parentUl); 


// // select the previous element sibling
// // const parentElement = parentUl.closest('.red-bg'); 
// // const ulParentSection = parentUl.parentElement; 
// // console.log(ulParentSection);

// // select the next element sibling 
// // const nextElementSibling = parentUl.nextElementSibling; 
// // console.log(nextElementSibling);

// const section = document.querySelector('section'); 
// // section.className = '';
// // section.style.backgroundColor = 'green'; 

// const btn = document.querySelector('button'); 
// let toggle = false; 

// // add a event listener to the btn
// btn.addEventListener('click', () => {
//   // if(!toggle) {
//   //   toggle = true; 
//   //   section.className = 'red-bg visible';
//   // }
//   // else {
//   //   toggle = false;
//   //   section.className = 'red-bg invisible'; 
//   // }
//   // console.log('click');
//   // console.log(section.classList.contains('red-bg'));

//   // add 'red-bg' class to section if empty and toggle 'visible & invisible class')
//   section.classList.contains('red-bg') ? '' : 'red-bg'; 
//   section.classList.toggle('visible');
//   section.classList.toggle('invisible');
// });


// // create a HTML tag  
// // section.innerHTML = '<h3>New Title</h3>';

// section.insertAdjacentHTML('afterend', '<p>test went wrong</p>');

// // create a new HTML element 
// const newListElement = document.createElement('li'); 
// newListElement.textContent = 'Item 4'; 

// parentUl.appendChild(newListElement); 


// // create a new HTML element 
// const newLi = document.createElement('li'); 
// newLi.textContent = 'List 5';
// parentUl.append(newLi);


// lastElementChild = parentUl.lastElementChild; 
// const newLi1 = document.createElement('li'); 
// newLi1.textContent = 'Item 5'; 
// lastElementChild.before(newLi1);

// const clone = newLi1.cloneNode(true); 
// console.log(clone.textContent); 
// clone.textContent = 'some other text'; 
// lastElementChild.before(clone);

const list = document.querySelector('ul');
const newListItem = document.createElement('li');
newListItem.textContent = 'Item 4'; 

// clone nodes
const newListItem1 = newListItem.cloneNode(); 
newListItem1.textContent = 'clone node';
list.prepend(newListItem1)
list.append(newListItem1)

list.append(newListItem); 
// list.parentElement.removeChild(list); 


// traverse sibling nodes
const li1 = list.firstElementChild; 
const li2 = li1.nextElementSibling; 

console.log(li2);

console.log(li1);
