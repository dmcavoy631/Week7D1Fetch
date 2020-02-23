


// define array's
let contacts = [];
let test =[];

const getAddressBook = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then((response) => { return response.json()})

    .then((results) => {
      contacts = results;
      displayContacts(contacts);
    })
}

// add anothe 100 contact to array.
const addMore = () => {
  fetch('https://randomuser.me/api/?results=100')
  .then((response) => { return response.json()})

  .then((results) => {
    test.push(results)
    console.log(results)
  })
}


// this function logs the results to browsers console
const consoleAddressBook = () => {
   console.log(contacts)
}



function seeDetails(i){

   document.getElementById("details-"+i).innerHTML +=
  `<ul>
  <li>P# ${contacts.results[i].phone}</li>
  <li>C# ${contacts.results[i].cell}</li>
  <li>DOB# ${contacts.results[i].dob}</li>
  <li>${contacts.results[i].location.street} ${contacts.results[i].location.city} ${contacts.results[i].location.postcode} ${contacts.results[i].location.country}</li>
  </ul>`
  console.log(i)
}


// Display contacts in flex box
const displayContacts = (contacts) => {
  for (let i = 0; i < contacts.results.length; i++){
    document.getElementById('displayContacts').innerHTML += 
    `<div id="img-${i}" > 
    
    <p>"${contacts.results[i].name.first + " " + contacts.results[i].name.last}"</p> 

    <img src="${contacts.results[i].picture.large}" onclick="seeDetails(${i})">

    <div id='details-${i}'></div>
    </div>`;
  }
}


// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getAddressBook()
}




{/* <ul id = 'seeDetails' >
<li>${" C# " + contacts.results[i].cell +
" P# " + contacts.results[i].phone + 
" DOB " + contacts.results[i].dob.date + 
" Address " + contacts.results[i].location.street

+ 
+ contacts.results[i].location.postcode
+ contacts.results[i].location.country}"</li */}