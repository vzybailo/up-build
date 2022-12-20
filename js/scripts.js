// burger menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// anchor links

const anchors = document.querySelectorAll('a[href*="#"]');

for( let anchor of anchors) {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    const fixedHeaderHeight = 90;
		const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
    menuBtn.classList.toggle('active');
	  menu.classList.toggle('active');
    window.scrollTo({
    	top,
      left: 0,
      behavior: "smooth",
    })
  })
}


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

let minus = document.querySelector('.services__minus')
let plus = document.querySelector('.services__plus')
let content = document.querySelector('.serv__list')

plus.addEventListener('click', function() {
  content.style.display = 'block'
  console.log('work')
})