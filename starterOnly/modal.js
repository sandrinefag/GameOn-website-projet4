function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const inputForm = document.querySelectorAll("input.text-control");
// console.log(inputForm);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//------------------------------------------------------------------------------
//fermer le modal


function modalClose() {
  let cross = document.querySelector(".close");
  cross.addEventListener("click", () => {
  modalbg.style.display = "none";
  })
}
modalClose();


let firstName = formData[0]

let lastName = formData[1];
let email = formData[2];
let birthdate = formData[3];
let contestParticipation = formData[4];


firstName.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  const isValid = checkedUserName(userInput);

  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }
})

lastName.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  const isValid = checkedUserName(userInput);
  
  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }
})

email.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  const isValid = checkedUserMail(userInput);
  
  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }
})

birthdate.addEventListener("input", (event) => {
  const userInput = event.target.value;
  const isValid = checkedBirthDateUser(userInput);
  
  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }

})

contestParticipation.addEventListener("input", (event) => {
  userInput = event.target.value;
  const isValid = userNberOfParticipationGame(userInput);
  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }
})



//--------------------------------------------------------------------------------
//verification chmps prenom ok
function checkedUserName(nameUser) {
  console.log(nameUser);
  let regexNames = new RegExp("^[a-zA-ZÀ-ÖØ-öøç]{2,15}[-]{0,1}[a-zA-ZÀ-ÖØ-öøç]{0,15}$");
  if (!regexNames.test(nameUser)) {
    // errorMessage();
    return false;
  }
  return true;
}


function setErrorMsg(elm) {
  console.log({elm});

  elm.nextElementSibling.classList.add("active");

}
function removeErrorMsg(elm) {
  elm.nextElementSibling.classList.remove("active");

}





//----------------------------------------------------------
//vérification chps email ok
function checkedUserMail(userMail) {
  let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
  if (!regexMail.test(userMail)) {
    return false;
  }
  return true;
}


//-------------------------------------------------------------------------------
//verification chps date de naissance ok
function checkedBirthDateUser(userBirthDay) {
  console.log(userBirthDay);
  const userDate = new Date(userBirthDay);
  console.log(userDate.getTime());
 
   if (!isNaN(userDate.getTime())) {
    console.log("ok");
    const currentDate = new Date();
    const userAge = currentDate.getFullYear() - userDate.getFullYear();
    const monthOfBirthUser = userDate.getMonth();
    const dateNumberOfUser = userDate.getDate();
    console.log(dateNumberOfUser);
    console.log(monthOfBirthUser)
    console.log(userAge);

    if ((userAge === 18 && currentDate.getMonth() >= monthOfBirthUser && currentDate.getDate() >= dateNumberOfUser) || (userAge > 18)) {
      return true;
    } 
  }
  return false;
}

function userNberOfParticipationGame(userParticipation){
  let regexParticipGame = /^\d{0,2}$/;
  if (!regexParticipGame.test(userParticipation)) {
    return false;
  } 
  return true;
}


//-------------------------------------------------------------

// function errorMsg() {

// //msg erreur
//   let errorMsgNameSurname = "Veuillez saisir minimum 2 charactères"
//   let errorMsgmail = "Le mail n'est pas valide";
//   let errorMsgbirth = "chps incomplet";
//   let errorParticipation = "Veuillez entrer un nombre entre 0 et 99";

// }
  //afficher msg
function displayErrorMsg(errorMessage) {
  const errorMsgTag = document.getElementById("errorMsg");
 
  if (!errorMsgTag ) {
    const errorMsgTag = document.createElement("p");
    errorMsgTag.id = "errorMsg"
    
    errorMsgTag.innerText = errorMessage;
  } else {
    errorMsgTag.remove()
  }

}
function validate() {
  let validForm = document.querySelector("form");
  validForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
  
  })

}

