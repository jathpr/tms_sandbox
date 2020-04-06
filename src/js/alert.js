// setTimeout(()=>alert("Я JavaScript!"), 8);
console.log(window);
document.body.style.background = 'red';
// document.body.p.style.background = 'red';

console.log('document.body', document.body);
setTimeout(() => (document.body.style.background = ''), 3000);
