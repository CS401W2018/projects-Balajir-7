document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;

    if (!fullname) {
        alert("Full Name cannot be blank.");
        return;
    }

    if (!age || age<18) {
        alert("You must be 18 or older to submit this form");
        return;
    }

const formData = {
    fullname: fullname,
    email: email,
    password: pass
};

console.log(formData)
const xhr = XMLHttpRequest();
xhr.open("GET","submit.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        
        alert('Form submitted successfully.');
    } else if (xhr.readyState === 4) {
        alert('Error submitting form');
    }    
};
xhr.send(JSON.stringify(formData));     
});