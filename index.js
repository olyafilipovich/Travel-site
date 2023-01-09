    const burgerItem = document.querySelector(".burger");
    const accountClose = document.querySelector(".nav-media");
    const menu = document.querySelector(".nav-media390");
    const menuClose = document.querySelector(".nav-close");
    burgerItem.addEventListener ('click', () => {
       menu.classList.toggle('nav-open'); 
    });
    accountClose.addEventListener ('click', () => {
        menu.classList.remove('nav-open');
        popUp.classList.remove('hidden');
    });
   
    menuClose.addEventListener ('click', () => {
        menu.classList.remove('nav-open');
    });
    


/*
const Slider = document.querySelector(".destinations-slider");
const leftElement = document.querySelector(".left1");
const rightElement = document.querySelector(".right1");

const moveLeft = () => {
    Slider.classList.add("transition-left");
    leftElement.removeEventListener("click", moveLeft);
    rightElement.removeEventListener("click", moveRight);
}

const moveRight = () => {
    Slider.classList.add("transition-right");
    rightElement.removeEventListener("click", moveRight);
    leftElement.removeEventListener("click", moveLeft);
}

leftElement.addEventListener("click", moveLeft);
rightElement.addEventListener("click", moveRight);

Slider.addEventListener("animationend", (animationEvent) => {
    if(animationEvent.animationName === "move-left") {
        Slider.classList.remove("transition-left");
       
      

    } else {
        Slider.classList.remove("transition-right");
    }


    leftElement.addEventListener("click", moveLeft);
    rightElement.addEventListener("click", moveRight);
});
*/
/*
const slider = document.querySelector(".destinations-slider");
const sliders = document.querySelectorAll(".slide");
let currentItem = 0;
let isEnabled = true;


function changeCurrentItem(n) {
    currentItem = (n + sliders.length) % sliders.length;
}

function moveSlide (direction) {
    isEnabled = false;
    sliders[currentItem].classList.add(direction);
    
}

function previousSlide (n) {
    moveSlide ("transition-left");
    changeCurrentItem(n-1);
}

function nextSlide (n) {
    moveSlide ("transition-right");
    changeCurrentItem(n+1);
}

slider.querySelector(".left1").addEventListener("click", function() {
    if (isEnabled) {
        previousSlide (currentItem);
    }
});

slider.querySelector(".right1").addEventListener("click", function() {
    if (isEnabled) {
        nextSlide (currentItem);
    }
});
*/
/*
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}
function showSlides(n) {
    let i;
    const slider = document.querySelector(".destinations-slider");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".bullet");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slider.style.transform = `translateX(860px)`;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slider.style.transform  = `translateX(-860px)`;
    dots[slideIndex-1].className += " active";
    }

    slides[slideIndex-1].addEventListener("click", previousSlide);
    slides[slideIndex+1].addEventListener("click", nextSlide);
 */

/* slider */
    let width;
    if (window.innerWidth > 1024) {
        width = 860;
    } else if (window.innerWidth > 860 && window.innerWidth <= 1024) {
        width = 740;
    } else if (window.innerWidth > 786 && window.innerWidth <= 860) {
        width = 640;
    } else if (window.innerWidth > 600 && window.innerWidth <= 786) {
        width = 540;
    }else if (window.innerWidth > 391 && window.innerWidth <= 600) {
        width = 440;

    } else if (window.innerWidth <= 391) {
        width = 400;
    };

   let count = 1;
   let i = 1;

   let position  = 0;
   const slider = document.querySelector(".destinations-slider");
   const slides = document.querySelectorAll(".slide");
   const dots  = document.querySelectorAll(".bullet");

   document.querySelector('.left').addEventListener("click", moveLeft);
        function moveLeft(){
            if (position < width) {
            position += width * count;
            position = Math.max(position, -(slides.length - count) * width);
            slider.style.transform = `translateX(${position}px)`;
            if (i < 3) {
                dots[i-1].classList.add("active");
                dots[i].classList.remove("active");
                i++;
                } else {
                    i=1;
                    dots[i-1].classList.add("active");
                    dots[i].classList.remove("active");
                    i= i-1;
                };
            } else {
                position = 0;
            };
          
        };

    document.querySelector('.right').addEventListener("click", moveRight);
        function moveRight(){
            if (position > - width) {
                position -= width * count;
                position = Math.min(position, ((slides.length - count) * width));
                slider.style.transform = `translateX(${position}px)`;
            if ((i < 3) && ((i + 1) !== 3)) {
                    dots[i+1].classList.add("active");
                    dots[i].classList.remove("active");
                    i++;
                } else if ((i + 1) == 3) {
                    i=1;
                    dots[i].classList.add("active");
                    dots[i-1].classList.remove("active");
                } else {
                    i=1;
                    dots[i-1].classList.add("active");
                    dots[i].classList.remove("active");
                }; 
            } else {
                position = 0;
            };
        };
  
/* slider end*/

/*pop-up*/        

const buttonLogin = document.querySelector('.header-button');
const popUp = document.querySelector('.pop-up_login');
const darkMode = document.querySelector('.pop-up'); 


buttonLogin.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

accountClose.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

popUp.addEventListener('transitionend', () => {
    darkMode.classList.toggle('dark-mode');
});


darkMode.addEventListener('click', (event) => {
    if(event.target.classList.contains('pop-up')) {
        popUp.classList.add('hidden');
    };
});


function alertObj(obj) {
    let output = "";
    for (let property in obj) {
        output += property + ': ' + obj[property]+'; '+'\n';
};
alert(output);

};

const form = document.querySelector('.login-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');

    const values = {
        email: email.placeholder,
        password: password.placeholder,
    };

    alertObj(values);
});


let flagSignIn = "up";
const createAccount = document.querySelector('[data-n1="create-account2"]');
const content = document.querySelectorAll('[data-n1]');
const visibility = document.querySelectorAll('.on')

const n1Obj = {
    in: {
        'title': 'Log in to your account',
        'signIn-btn': 'Sign In',
        'create-account1': 'Don’t have an account?',
        'create-account2': 'Register',
    },

    up: {
        'title': 'Create account',
        'signIn-btn': 'Sign Up',
        'create-account1': 'Already have an account?',
        'create-account2': 'Log in',
    }
};

function changeContent (flag) {
    content.forEach(item => item.innerHTML = n1Obj[flag][item.dataset.n1]);
};

function offSignIn () {
    visibility.forEach(item => item.classList.toggle('off'));
    changeContent(flagSignIn);
    flagSignIn = flagSignIn === "up" ? "in" : "up";
};

createAccount.addEventListener('click', offSignIn);

/* pop-up end*/

window.addEventListener('resize', function () { setTimeout(function(){ window.location.reload(); }); })

console.log ('1-50\n2-50\n3-25');