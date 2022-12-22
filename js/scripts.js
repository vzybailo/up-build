// burger menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const burgLinks = document.querySelectorAll('.menu__item');

for( let burgLink of burgLinks) {
  burgLink.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target) {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active');
    }
  })
}



// anchor links

const anchors = document.querySelectorAll('.nav__box a[href*="#"]');

for( let anchor of anchors) {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    const fixedHeaderHeight = 90;
		const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
    window.scrollTo({
    	top,
      left: 0,
      behavior: "smooth",
    })
  })
}

let btnAnchor = document.querySelector('.btn')
let btnScroll = document.querySelector('.services')

btnAnchor.addEventListener('click', function(e) {
  e.preventDefault();
  
  btnScroll.scrollIntoView({
    top: true,
    block: 'start',
    behavior: "smooth"
  })
})


// menu scale in scroll

window.onscroll = function scrollFunction() {
  let header = document.querySelector(".header")
  let img = document.querySelector('.img__pic')
  let links = document.querySelectorAll(".nav__link") 

  for(let i = 0; i < links.length; i++) {     
    let link = links[i]

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      link.style.fontSize = "20px"
      header.style.padding = "0px";
      img.classList.add('scrolled__img')
    } else {
      link.style.fontSize = "24px"
      header.style.padding = "15px 0";
      img.classList.remove('scrolled__img')
    }  
  }
}

// accordeon

let acc = document.getElementsByClassName("services__header");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-acc");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//show more btn

var more = document.querySelectorAll('.works__btn');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 3;
    
    var hidden = this.parentNode.querySelectorAll('.hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.add('show');
      hidden[i].classList.remove('hidden');
    }
  });
}


// slider


$(document).ready(function(){
  $('.works__list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 2048,
        settings: "unslick"
     },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
});


$(function () {
  $(".works__item").slice(0, 6).show();
  $("body").on('click touchstart', '.load-more', function (e) {
    e.preventDefault();
    $(".works__item:hidden").slice(0, 3).slideDown();
    if ($(".works__item:hidden").length == 0) {
      $(".load-more").css('visibility', 'hidden');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
});


$(document).ready(function(){
  $(".works__item").slice(0, 6).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".works__item:hidden").slice(0, 6).slideDown();
    if($(".works__item:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})