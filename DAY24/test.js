// function fetchData(callback) {
//   console.log("Fetching data...");

//   setTimeout(() => {
//     console.log("Data received!");
//     callback(); // Call the callback after data is fetched
//   }, 2000);
// }

// function showMessage() {
//   console.log("Processing complete!");
// }

// fetchData(showMessage);

function fetchData(callback){
  console.log('Fetching Data');

  setTimeout(() =>{
    console.log('Data Received!');
    callback();
  }, 2000)
}

function showMessage(){
  console.log('Provessinng Complete');
}

fetchData(showMessage)
