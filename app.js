
const contact = document.querySelector('.contact-form') ;

let name = document.getElementById('name')
let email = document.getElementById('email')
let age = document.getElementById('age')

contact.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value, 
        email: email.value,
        age: age.value
    }    

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function() {
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
        alert('Email Sent')
        name.value = ''
        email.value = ''
        age.value = ''
    } else{
        alert('ERROR')
    }
  }

xhr.send(JSON.stringify(formData))

}) 
  
