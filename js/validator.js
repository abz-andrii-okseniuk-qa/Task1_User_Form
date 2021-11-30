import {
    firstName as FirstNameInput,
    lastName as LastNameInput,
    FirstNameErrorText,
    LastNameErrorText,
    defaultStyle,
    ThereWasFormSubmission
} from './main.js'


let FirstNameIsValid = false
let LastNameIsValid = false

const errorMessage = {
    "FirstNameEmpty": "First Name field is requrire",
    "LastNameEmpty": "Last Name field is requrire",
    "FirstNameless3": "First Name must be more than 3 characters",
    "LastNameless3": "Last Name must be more than 3 characters",
    "FirstNameMore60": "First Name must be less than 60 characters",
    "LastNameMore60": "Last Name must be less than 60 characters"
}


let isBlurLastName = false;
let isBlurFirstName = false;

firstName.onblur = () => {
    ValidatorFirstName()
    isBlurLastName = true
}

lastName.onblur = () => {
    ValidatorLastName()
    isBlurFirstName = true
}


firstName.onkeyup = () => isBlurLastName || ThereWasFormSubmission ? ValidatorFirstName() : null

lastName.onkeyup = () => isBlurFirstName || ThereWasFormSubmission ? ValidatorLastName() : null



function ValidatorFirstName() {
    if (firstName.value === '') {
        FirstNameErrorText.classList.add('error_text')
        FirstNameErrorText.innerHTML = errorMessage.FirstNameEmpty
        firstName.classList.add('invalidStyle')
        FirstNameIsValid = false
    } else if (firstName.value.length < 3) {
        FirstNameErrorText.classList.add('error_text')
        FirstNameErrorText.innerHTML = errorMessage.FirstNameless3
        firstName.classList.add('invalidStyle')
        FirstNameIsValid = false
    } else if (firstName.value.length > 60) {
        FirstNameErrorText.classList.add('error_text')
        FirstNameErrorText.innerHTML = errorMessage.FirstNameMore60
        firstName.classList.add('invalidStyle')
        FirstNameIsValid = false
    }
    else {
        defaultStyle('FirstName')
        FirstNameIsValid = true
    }
}

function ValidatorLastName() {
    if (lastName.value === '') {
        LastNameErrorText.classList.add('error_text')
        LastNameErrorText.innerHTML = errorMessage.LastNameEmpty
        lastName.classList.add('invalidStyle')
        LastNameIsValid = false
    } else if (lastName.value.length < 3) {
        LastNameErrorText.classList.add('error_text')
        LastNameErrorText.innerHTML = errorMessage.LastNameless3
        lastName.classList.add('invalidStyle')
        LastNameIsValid = false
    } else if (lastName.value.length > 60) {
        LastNameErrorText.classList.add('error_text')
        LastNameErrorText.innerHTML = errorMessage.LastNameMore60
        lastName.classList.add('invalidStyle')
        LastNameIsValid = false
    }
    else {
        defaultStyle('LastName')
        LastNameIsValid = true
    }
}


export {
    FirstNameIsValid,
    LastNameIsValid,
    ValidatorFirstName,
    ValidatorLastName
}