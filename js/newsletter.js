const form = document.querySelector("form");
const email = document.getElementById("email");


function sendEmail() {
    const bodyMessage = `Email: ${email.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ikuerowoboluwatife@gmail.com",
        Password : "8D6F4AF1ADCDED55E79997A1D69FFF280F55",
        To : `${email.value}`,
        From : "ikuerowoboluwatife@gmail.com",
        Subject : "Harris Momodu Nesletter Suscription",
        Body : bodyMessage
    }).then(
    message => {
        if (message == "OK") {
            Swal.fire({
                title: "Great!",
                text: "Thank You For Suscribing!",
                icon: "success"
              });
        }
    }
    );
}