const buttons = document.querySelectorAll('button');
const body = document.body;

buttons.forEach((button)=>{

  button.addEventListener('click', ()=>{
    body.style.backgroundColor = button.id;
  })
});



