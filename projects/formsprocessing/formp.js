document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        fullname: document.getElementById("fullname").value,
        password: document.getElementById("pass").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        state: document.getElementById("states").value,
        agree: document.getElementById("agree").checked,
        comments: document.getElementById("comments").value,
    };

    console.log(formData)

    if (!formData.fullname || !formData.password || !formData.email) {
        alert("Please fill out all required fields.");
        return;
    }

    if (formData.age < 18) {
        alert("You must be 18 or older to submit this form.");
        return;
    }

    if (!formData.state || formData.state === "blank") {
        alert("Please select a state.");
        return;
    }


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.body.innerHTML += `<p>${response.message}</p>`;
            document.getElementById("form").reset();
            alert("Form submittet successfully!");
        }
    };
    xhr.send(); 
})