(function () {
    "use strict"
    window.addEventListener("load", () => {
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

        // STATS COUNTER ONSCROLL
        $(document).ready(function(){
            $('.stat').counterUp({
              delay: 10,
              time: 1200
            });
          });
        // END STATS COUNTER ONSCROLL

        
        // ANIMATE ON SCROLL 
        AOS.init();
        // END ANIMATE ON SCROLL 

        //  TESTIMONIAL ROTATOR 
        let count = 1;
        function contentRotator() {
        $(`#container p:nth-child(${count})`).fadeIn(2000, function () {
            if ($(this).is("#container p:last-child")) {
                setTimeout(function () {
                    $(`#container p:nth-child(${count})`).fadeOut(2000, function() {
                       count = 1;
                       contentRotator(); 
                    });  
                },3000);
            }
            else {
                setTimeout(function () {
                    $(`#container p:nth-child(${count})`).fadeOut(2000, function () {
                       count ++
                       contentRotator();  
                    });  
                }, 3000);
            }
        });
        };
        contentRotator();
        // END TESTIMONIAL ROTATOR

        // FAQ's 
        let toggles = document.getElementsByClassName('toggle');
        let contentDiv = document.getElementsByClassName('content');
        let icons = document.getElementsByClassName('icon');

        for(let i=0; i<toggles.length; i++){
            toggles[i].addEventListener('click', ()=>{
                if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
                    contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                    toggles[i].style.color = "#001300";
                    toggles[i].style.fontWeight = "bold";
                    icons[i].classList.remove('fa-plus');
                    icons[i].classList.add('fa-minus');
                }
                else{
                    contentDiv[i].style.height = "0px";
                    toggles[i].style.color = "#111130";
                    toggles[i].style.fontWeight = 500;
                    icons[i].classList.remove('fa-minus');
                    icons[i].classList.add('fa-plus');
                }

                for(let j=0; j<contentDiv.length; j++){
                    if(j!==i){
                        contentDiv[j].style.height = "0px";
                        toggles[j].style.color = "#111130";
                        icons[j].classList.remove('fa-minus');
                        icons[j].classList.add('fa-plus');
                    }
                }
            });
        }
        // END FAQ's
    });
})();

     
