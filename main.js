

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getAddressBook()
}



// define array's
let contacts = [];
let test =[];

const getAddressBook = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then((response) => { return response.json()})

    .then((results) => {
      contacts = results.results;
      displayContacts(contacts);
      
    })
}

// this function logs the results to browsers console
const consoleAddressBook = () => {
   console.log(contacts)
}


//  Loop show details details method
// function seeDetails(i){

//    document.getElementById("details-"+i).create
//   `<div><ul>
//   <li>P# ${contacts.results[i].phone}</li>
//   <li>C# ${contacts.results[i].cell}</li>
//   <li>DOB# ${contacts.results[i].dob}</li>
//   <li>${contacts.results[i].location.street} ${contacts.results[i].location.city} ${contacts.results[i].location.postcode} ${contacts.results[i].location.country}</li>
//   </ul>
//   </div>`
//   console.log("details-"+i)
// }


// Display contacts in flex box
const displayContacts = (contacts) => {
  
  //  Code for loop, this was replace by the map... this seem render run faster.
    // for (let i = 0; i < contacts.results.length; i++){
    // document.getElementById('displayContacts').innerHTML += 
    // `<div id="img-${i}" > 
    
    // <p>"${contacts.results[i].name.first + " " + contacts.results[i].name.last}"</p> 

    // <img src="${contacts.results[i].picture.large}" onclick="seeDetails(${i})">

    // <div id='details-${i}'>
    // <button onclick="seeDetails(${i})">See Details</button>
    // </div>
    // </div>`;

  // MAP Method
    const allPosts = document.getElementById("displayContacts");
    contacts.map((user) => {
      
      const div = document.createElement("div");
      div.setAttribute("class", "contact")
      
      const showImg = document.createElement("img");
      showImg.src = user.picture.large;

      const text = document.createElement("p");
      text.innerHTML = `${user.name.last}, ${user.name.first}`;

      allPosts.append(div);
      div.appendChild(text);
      div.appendChild(showImg);
      
      const button = document.createElement("button");
      button.setAttribute("id", "Details")
      button.innerHTML = "Contact Details";
      div.appendChild(button);

      button.onclick = function() {
        if (this.innerHTML === "Contact Details") {

          let dob = new Date(user.dob.date);

          this.innerHTML = `<li>${user.name.first} ${user.name.last}<li>C: ${user.cell}</li><li>P: ${user.phone}</li><li>DOB: ${dob.toDateString()}</li><li>Addr: ${user.location.street.number,user.location.street.name}<li>City: ${user.location.city}</li><li>State: ${user.location.state}</li><li>Post: ${user.location.postcode}</li>`;

        } else {
          this.innerHTML = "Contact Details";
        }

      };

    });
}
