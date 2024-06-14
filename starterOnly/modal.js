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
const modalBodyMsg = document.querySelector(".modal-body")
const redBorderInput = document.querySelector(".errorMsg");
const checkBoxTownError = document.querySelector(".checkBoxTownError");
const checkBoxConditionError = document.querySelector(".checkBoxConditionError");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}
//------------------------------------------------------------------------------
//each input of the inputForm array
let firstName = inputForm[0];
let lastName = inputForm[1];
let email = inputForm[2];
let birthdate = inputForm[3];
let contestParticipation = inputForm[4];

//eventListeners check if the user's input is valid or not
firstName.addEventListener("input", (event) => {
	const userInput = event.target.value;
	const isValid = checkedUserName(userInput);

	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);	
	}
	
});

lastName.addEventListener("input", (event) => {
	const userInput = event.target.value;
	const isValid = checkedUserName(userInput);

	if (isValid) {
		removeErrorMsg(event.target);

	} else {
		setErrorMsg(event.target);
	}
});

email.addEventListener("input", (event) => {
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
	const isValid = checkUserParticipation(userInput);
	if (isValid) {
		removeErrorMsg(event.target);
	} else {
		setErrorMsg(event.target);
	}
});

//button submit check before the final validation if all inputs and checkbox are true
sendBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const isOk = isFormvalidate();
	const form = document.querySelector("form");
	if (isOk) {
		//message of registration is successfull
		document.querySelector(".msgValidation").style.display = "block";
		let validationContent = document.querySelector(".content");
		validationContent.classList.add("validation-content");
		modalBodyMsg.classList.add("modalBody-close")
		form.classList.add("formReserve");
		sendBtn.value = "Fermer";
		sendBtn.type = "button";
		sendBtn.classList.add("btn-close");
		btnClose();
	}
});


//------------------------------------------------------------------------------------
//close the modal with the button "close"
function btnClose() {
	if (sendBtn.value === "Fermer") {
		sendBtn.addEventListener("click", () => {
			modalbg.style.display = "none";
		})
	}
}

//close the modal with the cross
function modalClose() {
	let cross = document.querySelector(".close");
	cross.addEventListener("click", () => {
		modalbg.style.display = "none";
	});
}
modalClose();

//--------------------------------------------------------------------------------
//Each function checks each entered is valid or not

//----------------------USER'S NAMES-------------------------------
function checkedUserName(nameUser) {
	let regexNames = new RegExp(
		"^[a-zA-ZÀ-ÖØ-öøç]{2,15}[-]{0,1}[a-zA-ZÀ-ÖØ-öøç]{0,15}$"
	);
	return regexNames.test(nameUser)
}

//-------------------EMAIL-------------------------------

function checkedUserMail(userMail) {
	let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
	return regexMail.test(userMail);
}

//----------------------BirthDate-------------------------------
function checkedBirthDateUser(userBirthDay) {
	const userDate = new Date(userBirthDay);
	console.log (userDate.getTime())
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

//-------------Nber of Participation-------------------------
function checkUserParticipation(userParticipation) {
	let regexParticipGame = /^\d{1,2}$/;
	if (!regexParticipGame.test(userParticipation)) {
		return false;
	}
	return true;
}

//---------------- functions of Error message----------------------------------
function setErrorMsg(elm) {
	elm.nextElementSibling.classList.add("active");
	elm.classList.add("error-border")
}
function removeErrorMsg(elm) {
	elm.nextElementSibling.classList.remove("active");
	elm.classList.remove("error-border")	
}

function setErrorMsgBox(checkBox) {
	checkBox.classList.add("active");
}
function removeErrorMsgBox(checkBox) {
	checkBox.classList.remove("active");	
}

//--------------------Validation before submition-----------------

function isFormvalidate() {
	const isValidFirstName = checkedUserName(firstName.value);
	const isValidLastName = checkedUserName(lastName.value);
	const isValidEmail = checkedUserMail(email.value);
	const isValidBirth = checkedBirthDateUser(birthdate.value);
	const isValidParticipation = checkUserParticipation(contestParticipation.value);
	const btnTest = document.querySelectorAll('.checkbox-input[type="radio"]');
	const checkedConditionFacul = document.querySelectorAll('.checkbox-input[type=checkbox]');
	isTownSelected = false;
	conditionValid = false

	if (!checkedUserName(firstName.value)) {
		setErrorMsg(firstName)
	} 
	if (!checkedUserName(lastName.value)) {
		setErrorMsg(lastName)
	}
	if (!checkedUserMail(email.value)) {
		setErrorMsg(email)
	} 
	
	if (!checkedBirthDateUser(birthdate.value)) {
		setErrorMsg(birthdate)
	}
	if (!checkUserParticipation(contestParticipation.value)) {
		setErrorMsg(contestParticipation)
	}
	
	for (let i = 0; i < btnTest.length; i++){
		if (btnTest[i].checked) {
			townNameChooseByUser = btnTest[i].value;
			isTownSelected = true;
			removeErrorMsgBox(checkBoxTownError);
			break;	
		} else {
			setErrorMsgBox(checkBoxTownError);
		}
	}

	for (let i = 0; i < checkedConditionFacul.length; i++){
		if (checkedConditionFacul[0].checked && (checkedConditionFacul[1].checked || !checkedConditionFacul[1].checked)) {
			conditionValid = true;
			removeErrorMsgBox(checkBoxConditionError);
			break
		} else {
			setErrorMsgBox(checkBoxConditionError);
		}
	}
	return isValidFirstName && isValidEmail && isValidBirth && isValidLastName && isValidParticipation && isTownSelected && conditionValid;
	
}




