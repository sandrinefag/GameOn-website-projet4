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
console.log(formData[0])
const inputForm = document.querySelectorAll("input.text-control");
// console.log(inputForm);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
console.log("hello world");
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

formData.forEach((formData) => {
firstName.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  const isValid = checkedUserName(userInput);

  if (isValid) {
    removeErrorMsg(event.target);
  } else {
    setErrorMsg(event.target);
  }

  // checkedUserName(event.target.value);
})

lastName.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  checkedUserName(userInput);

  // checkedUserName(event.target.value);
})

email.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const userInput = event.target.value;
  checkedUserMail(userInput);
 
  // checkedUserName(event.target.value);
})

birthdate.addEventListener("input", (event) => {
  const userInput = event.target.value;
  checkedBirthDateUser(userInput);
})

contestParticipation.addEventListener("input", (event) => {
  userInput = event.target.value;
  userNberOfParticipationGame(userInput);
  console.log(userInput)
})

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
    console.log("recommencé");
  } else {
    console.log("validé");
    //  mailValue = userMail.value
    // console.log(mailValue)

  }
}

//-------------------------------------------------------------------------------
//verification chps date de naissance ok
function checkedBirthDateUser(userBirthDay) {
  console.log(userBirthDay);
  const userDate = new Date(userBirthDay);
  console.log(userDate.getTime());
  if (isNaN(userDate.getTime())) {
  
    console.log("refusé");
  } else {
    console.log("ok");
    const currentDate = new Date();
    const userAge = currentDate.getFullYear() - userDate.getFullYear();
    const monthOfBirthUser = userDate.getMonth();
    const dateNumberOfUser = userDate.getDate();
    console.log(dateNumberOfUser);
    console.log(monthOfBirthUser)
    console.log(userAge);

    if ((userAge === 18 && currentDate.getMonth() >= monthOfBirthUser && currentDate.getDate() >= dateNumberOfUser) || (userAge > 18)) {
      console.log("est majeur");
    } else {
      console.log("pas majeur");
    }
  
  }
}

function userNberOfParticipationGame(userParticipation){
  let regexParticipGame = /^\d{1,2}$/;
  if (!regexParticipGame.test(userParticipation)) {
    console.log("veuillez entrer un chiffre")
  } else {
    console.log("c 'est bon")
  }
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

