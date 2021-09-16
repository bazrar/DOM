// create a HTML element
const div = document.createElement('div'); 
const p = document.createElement('p'); 

// get the body element 
const body = document.body; 

p.textContent = 'This is a test paragraph.'; 
// div.append(p); 
// div.append('Some text'); 
div.append(p, 'some test');
body.append(div);
// console.log('script loaded successfully!');