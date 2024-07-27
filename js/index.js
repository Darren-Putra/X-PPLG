// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add ('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('section');
// let sections = document.querySelectorAll('section');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         }
//         else {
//             sec.classList.remove('show-animate');
//         }
//     });
// }

// LOGO DAN ABOUT ANIMATION
var header = document.getElementById('sections');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}
// END LOGO DAN ABOUT ANIMATION

function scrollHandler() {
	fadeOutOnScroll(sections);
}

// SECTIONS ANIMATIONS
window.addEventListener('scroll', scrollHandler);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// END SECTIONS ANIMATIONS
// var password = document.getElementById("passwot").value;
// if (password === "10pplg") {
// 	window.location.replace("aib.html");
// }
// document.getElementById("form").addEventListener("submit", auth);

// function auth(event) {
//      event.preventDefault();

//      var username = document.getElementById("username").value;
//      var password = document.getElementById("passwot").value;
//      console.log(username);

//      if (password === "user") {
//           window.location.replace("www.google.com");
//      }  if (username === "" && password === "") {
//           alert("Please enter information");
//      } else{
//          alert("Please enter valid information");
//          return;
//      }
// }
function login(){
	var user = document.loginform.user_name.value;
	var pass = document.loginform.pass_word.value;
if(user == "" || pass == ""){
	  alert("Nama dan Password tidak boleh kosong");
 }else{
if((user == "Revanza" || user == "Darren") && pass == "10PPLG"){
	  document.loginform.submit();
}else{
	 alert("Masukan Nama kalian dan Password dengan benar");
}
   }
	   }