
const form = document.querySelector("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `<div class="gmail" style="background-color: white; padding 30px; text-align: center; color: black;">
                            <div class="gmail-logo" style="display: flex; gap: 10px; justify-content: center; align-items: center;">
                                <h1 style="font-size: 2em; font-family: 'Dancing Script', cursive;">Harris Momodu</h1>
                            </div>
                            <div class="gmail-message" style="font-family: 'Lora', serif;">
                                <h2 style="margin-bottom: 20px;">Spiritual Contact Form</h2>
                                <p style="margin-bottom: 20px; font-weight: bold;">Contact Form Message is as follows:</p>
                                <p style="margin-bottom: 20px;">${message.value}</p>
                                <p style="margin-bottom: 20px;">Message sent from <strong>${lastName.value}, ${firstName.value}</strong></p>
                                <p>Reply To: <strong>${email.value}</strong> or give a call to <strong>${phone.value}</strong></p>
                            </div>
                        </div>`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "harris.momodu@gmail.com",
        Password : "E1428AD42C9E8E79226448CDC79138221B0B",
        To : 'harris.momodu@gmail.com',
        From : 'harris.momodu@gmail.com',
        Subject : "Harris Momodu Contact Form",
        Body : bodyMessage
    }).then(
    message => {
        if (message == "OK") {
            Swal.fire({
                title: "Sucess!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
    }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".cnt-item");
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[2].value != "") {
            checkEmail()
        }
        items[2].addEventListener("keyup", () => {
            checkEmail()
        });
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}
function checkEmail() {
    const emailRegex = /^[^_.]([a-zA-Z0-9_]*[.]?[a-zA-Z0-9_]+[^_]){2}@{1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;
    const emailError = document.querySelector(".error-txt.email") 
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if (email.value != "") {
            emailError.innerText = "Enter valid email address";
        }
        else {
            emailError.innerText = "Provide email address"
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error")
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
    if (!firstName.classList.contains("error") && 
        !lastName.classList.contains("error") && !email.classList.contains("error") &&
        !phone.classList.contains("error") && !message.classList.contains("error")) {
             sendEmail();

             form.reset();
             return false;
        
    }
});

