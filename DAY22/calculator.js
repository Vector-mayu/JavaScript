const button = document.querySelector('button');

button.addEventListener('click', ()=> {

  // Read the data 
  const first = document.getElementById('first');
  const num1 = Number(first.value);

  const second = document.getElementById('second');
  const num2 = Number(second.value);

  // Output the result

  const num = num1 + num2;
  const result =  document.getElementById('result');
  result.innerText = 'Result : ' + num;
})