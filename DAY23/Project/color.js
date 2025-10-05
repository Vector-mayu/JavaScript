 
 
 // BackGround Color Changer

// const buttons = document.querySelectorAll('button');
// const body = document.body;


// buttons.forEach((button)=>{
//   button.addEventListener('click', ()=>{
//     body.style.backgroundColor = button.id;
//   })
// });


// Code Optimization using Event Bubbling and capturing

const root = document.getElementById('root');

root.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON')
  {
    document.body.style.backgroundColor = event.target.id;
  }
})


