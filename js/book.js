const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, control) {
        this.carouselContainer = container;
        this.carouselControls = control;
        this.carouselArray = [...items];    
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
        });

        this.carouselArray.slice(0,5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
   
    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }
    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
               e.preventDefault();
               this.setCurrentState(control);
            });
        });
    }
}
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();


const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("book-list");
    const product = document.querySelectorAll(".featured-book");
    const productName = document.getElementsByTagName("h4");

    for(var i=0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName("h4")[0];
        if (match) {
            let textValue = match.textContent || match.innerHTML
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}


var countDownDate = new Date ("April 9, 2024 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);


const bookInfo = document.querySelector(".clicked-info");
const bookIcon = document.querySelectorAll(".book-info");
const compress = document.querySelector(".compress");
const library = document.querySelector("body");
const bookContent = document.querySelector(".book-reveal");
const libraryBookImg = bookContent.querySelector(".b-img");
const libraryBookName = bookContent.querySelector(".b-title");
const libraryBookCategory = bookContent.querySelector(".b-cat");
const libraryBookAuthor = bookContent.querySelector(".author");
const libraryBookPrice = bookContent.querySelector(".price");
const libraryBookDescription = bookContent.querySelector(".b-cat");

for (var i=0; i < bookIcon.length; i++) {
    const bookDisplay = bookIcon[i];
    bookDisplay.addEventListener("click", (event) => {
        event.preventDefault();
        bookInfo.style.left = "0";
        library.style.overflow = "hidden";
    });
    compress.addEventListener('click', () => {
        bookInfo.style.left = "-100" + "%";
        library.style.overflow = "auto";
    });
 
    bookContent.innerHTML = `
    <div class="book-content">
        ${libraryBookImg}
        <div class="book-rating">
            <h4>Book Category: <span class="lib-cat">${libraryBookCategory}</span></h4>
            <h1 class="lib-title">${libraryBookName}</h1>
            <p class="lib-aut">Author: <span>${libraryBookAuthor}</span></p>
            <p>Book Price: <span class="lib-price">${libraryBookPrice}</span></p>
            <div class="book-stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <a href="#">Purchase on Amazon</a>
        </div>
    </div>
    <div class="book-reading">
        <h1><span class="lib-des">${libraryBookDescription}</span> Book Description</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis, 
            explicabo voluptate provident quisquam numquam dignissimos officiis temporibus 
            excepturi inventore cum eius ullam praesentium officia sint! Suscipit nostrum rem provident.
        </p>
        <p>&copy; Copyright <script>document.write(new Date().getFullYear());</script> Evolution From Within</p>
    </div>
    `
}