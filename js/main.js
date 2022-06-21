// Mega Menu
let header = document.querySelector("header");
let hamburgerBtn = document.querySelector("header .shape");
let megamenu = document.querySelector(".megamenu");
let closeBtn = document.querySelector(".megamenu .close");

$(document).ready(() => {
  $("header .shape").click(() => {
    $(".megamenu").show(400);
  });
  $(".megamenu .close").click(() => {
    $(".megamenu").hide(400);
  })
})

hamburgerBtn.onclick = () => {
  header.style.visibility = "hidden";
}

closeBtn.onclick = () => {
  header.style.visibility = "visible";
}

// Slider 
let heads = document.querySelectorAll(".slider .heads .head");
let slides = document.querySelectorAll(".slider .slides .slide");

heads.forEach(ele => {
  ele.addEventListener("click", (e) => {
    heads.forEach(ele => {
      ele.classList.remove("active");
    })
    e.target.classList.add("active");
    slides.forEach(element => {
      element.style.display = "none";
    })
    slides[ele.dataset.index].style.display = "flex";
  })
})

// Expresion 
let mail = document.querySelector(".contact form .mail");
let emailAddr = document.querySelector(".contact form [type='text']");
let submit = document.querySelector(".contact form [type='submit']");
let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.onclick = (e) => {
  e.preventDefault();
  if (emailAddr.value.match(emailRegExp)) {
    console.log(emailAddr.value);
    mail.classList.remove("error-massage")
  } else {
    mail.classList.add("error-massage");
  }
}


function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr.value)) {
    return (true);
  } else {
    alert("You have entered an invalid email address!")
    return (false);
  }
}
