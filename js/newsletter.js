    // STICKY HEADER ONSCROLL TOP
    const body = document.body;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
    });
    // END STICKY HEADER ONSCROLL TOP
    // PAGE SCROLLING TOP BUTTON
    let scrollingUp = () => {
        let scrollTop = document.getElementById("myBtn");
        let scl = document.documentElement.scrollTop;
        let sclLen = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((scl * 100) / sclLen);
        if (scl>100) {
        scrollTop.style.display = "block";
        }
        else {
        scrollTop.style.display = "none";
        }
        scrollTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
        });
    }
    window.onscroll = scrollingUp;
    // END PAGE SCROLLING TOP BUTTON
    // SIDEBAR ONCLICK 
    const toggleOpen = document.querySelector(".toggle-open");
    const toogleClose = document.querySelector(".toggle-close");
    const sideNav = document.querySelector(".sidenav");
    const bodyScroll = document.querySelector("body");

    toggleOpen.addEventListener("click", () => {
        sideNav.style.display = "block";
        bodyScroll.style.overflow = "hidden";
    });
    toogleClose.addEventListener("click", () => {
        sideNav.style.display = "none"
        bodyScroll.style.overflow = "auto";
    });
    // END SIDEBAR ONCLICK

const form = document.querySelector("form");
const email = document.getElementById("email-new");


function sendEmail() {
    const bodyMessage = `Email: ${email.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ikuerowoboluwatife@gmail.com",
        Password : "8D6F4AF1ADCDED55E79997A1D69FFF280F55",
        To : "ikuerowoboluwatife@gmail.com",
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