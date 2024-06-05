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
const sendBtn = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const inputForm = document.querySelectorAll("input.text-control");
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

	});
}
modalClose();

let firstName = inputForm[0];
let lastName = inputForm[1];
let email = inputForm[2];
let birthdate = inputForm[3];
let contestParticipation = inputForm[4];




firstName.addEventListener("input", (event) => {
	// console.log(event.target.value);
	const userInput = event.target.value;
	const isValid = checkedUserName(userInput);

	if (isValid) {
		removeErrorMsg(event.target);

	} else {
		setErrorMsg(event.target);
	}
});

lastName.addEventListener("input", (event) => {
	// console.log(event.target.value);
	const userInput = event.target.value;
	const isValid = checkedUserName(userInput);

	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);
	}
});

email.addEventListener("input", (event) => {
	// console.log(event.target.value);
	const userInput = event.target.value;
	const isValid = checkedUserMail(userInput);

	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);
	}
});

birthdate.addEventListener("input", (event) => {
	const userInput = event.target.value;
	const isValid = checkedBirthDateUser(userInput);

	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);
	}
});

contestParticipation.addEventListener("input", (event) => {
	userInput = event.target.value;
	const isValid = userNberOfParticipationGame(userInput);
	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);
	}
});

sendBtn.addEventListener("click", (event) => {
	event.preventDefault();
	// let validationModal = document.querySelector("form");

	const isOk = isFormvalidate();
	if (isOk) {
		
		console.log("validation réussie")
	} else {
		console.log("echec")
	}
});

//--------------------------------------------------------------------------------
//verification chmps prenom ok
function checkedUserName(nameUser) {
	let regexNames = new RegExp(
		"^[a-zA-ZÀ-ÖØ-öøç]{2,15}[-]{0,1}[a-zA-ZÀ-ÖØ-öøç]{0,15}$"
	);
	return regexNames.test(nameUser)
}

function setErrorMsg(elm) {
	elm.nextElementSibling.classList.add("active");
}
function removeErrorMsg(elm) {
	elm.nextElementSibling.classList.remove("active");
}

//----------------------------------------------------------
//vérification chps email ok
function checkedUserMail(userMail) {
	let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
	return regexMail.test(userMail);
}

//-------------------------------------------------------------------------------
//verification chps date de naissance ok
function checkedBirthDateUser(userBirthDay) {
	const userDate = new Date(userBirthDay);
	if (!isNaN(userDate.getTime())) {
		const currentDate = new Date();
		const userAge = currentDate.getFullYear() - userDate.getFullYear();
		const monthOfBirthUser = userDate.getMonth();
		const dateNumberOfUser = userDate.getDate();

		if (
			(userAge === 18 &&
				currentDate.getMonth() >= monthOfBirthUser &&
				currentDate.getDate() >= dateNumberOfUser) ||
			userAge > 18
		) {
			return true;
		}
	}
	return false;
}



function userNberOfParticipationGame(userParticipation) {
	let regexParticipGame = /^\d{0,2}$/;
	if (!regexParticipGame.test(userParticipation)) {
		return false;
	}
	return true;
}

//-------------------------------------------------------------

function isFormvalidate() {
	const isValidFirstName = checkedUserName(firstName.value);
	const isValidLastName = checkedUserName(lastName.value);
	const isValidEmail = checkedUserMail(email.value);
	const isValidBirth = checkedBirthDateUser(birthdate.value);
	const isValidParticipation = userNberOfParticipationGame(contestParticipation.value);
	const btnTest = document.querySelectorAll('.checkbox-input[type="radio"]');
	const checkedConditionFacul = document.querySelectorAll('.checkbox-input[type=checkbox]');
	isTownSelected = false;
	conditionValid = false
	
	for (let i = 0; i < btnTest.length; i++){
		if (btnTest[i].checked) {
			townNameChooseByUser = btnTest[i].value;
			isTownSelected = true;
			break;	
		}
	}

	for (let i = 0; i < checkedConditionFacul.length; i++){
		if (checkedConditionFacul[0].checked && (checkedConditionFacul[1].checked || !checkedConditionFacul[1].checked)) {
			conditionValid = true;
			break;
		}
	}
	return isValidFirstName && isValidEmail && isValidBirth && isValidLastName && isValidParticipation && isTownSelected && conditionValid;

	
}



