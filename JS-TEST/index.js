let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")
let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")
let phoneValid = document.getElementById("phoneValid")
let phoneInvalid = document.getElementById("phoneInvalid")
let tnCInvalid = document.getElementById("tnCInvalid")
let batchNumberValid = document.getElementById("batchNumberValid")
let batchNumberInvalid = document.getElementById("batchNumberInvalid")
let currentModuleValid = document.getElementById("currentModuleValid")
let currentModuleInvalid = document.getElementById("currentModuleInvalid")

function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let batchNumber = document.getElementById("batchNumber").value;
  let currentModule = document.getElementById("currentModule").value;
  let tNCCheckBox = document.getElementById("tNCCheckBox").checked;

  let error = false;
  if (firstName === '' || firstName.length < 3){
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
     error = true;
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if(lastName === '' || lastName.length < 3){
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
     error = true;

  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }

  if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {
    emailInvalid.style.display = 'block'
    emailValid.style.display = 'none'
     error = true;

  } else {
    emailValid.style.display = 'block'
    emailInvalid.style.display = 'none'
  }

  if(phoneNumber === '' || phoneNumber.length != 10 ){
    phoneInvalid.style.display = 'block'
    phoneValid.style.display = 'none'
     error = true;

  } else {
    phoneValid.style.display = 'block'
    phoneInvalid.style.display = 'none'
  }

  if(!tNCCheckBox){
    tnCInvalid.style.display = 'block'

  } else {
    tnCInvalid.style.display = 'none'
  }

  if(batchNumber === ''){
    batchNumberInvalid.style.display = 'block'
    batchNumberValid.style.display = 'none'
     error = true;

  } else {
    batchNumberValid.style.display = 'block'
    batchNumberInvalid.style.display = 'none'
  }


  if(currentModule === ''){
    currentModuleInvalid.style.display = 'block'
    currentModuleValid.style.display = 'none'
    error = true;

  } else {
    currentModuleValid.style.display = 'block'
    currentModuleInvalid.style.display = 'none'
  }

  if(!error){
      alert('Your Details have been saved Successfully!')
      location.reload()
  }


  // console.log(firstName, lastName, phoneNumber, email, batchNumber, currentModule);
}