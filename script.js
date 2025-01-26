// document.getElementById("infoForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var email = document.getElementById("email").value;
//     var displayDiv = document.getElementById("displayData");
//     displayDiv.innerHTML = "<h2>Submitted Data:</h2>" +
//         "<p><strong>Name:</strong> " + name + "</p>" +
//         "<p><strong>Age:</strong> " + age + "</p>" +
//         "<p><strong>Email:</strong> " + email + "</p>";
// });


document.getElementById("infoForm")
    .addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
        name: form.name.value,
        age: form.age.value,
        email: form.email.value
    }
    
    displayData(data);

}

function displayData(data) {
    const { name, age, email } = data;

    const res = [name, age, email];

    
    const displayElement = document.getElementById("displayData")
    
    if (res.length === 3) {
        displayElement.style.display = 'block';
    }
    
    const displayElements = displayElement.getElementsByTagName('span');
    for(let i = 0; i<displayElements.length; i++) {
        displayElements[i].innerText = res[i];
    }
    
}