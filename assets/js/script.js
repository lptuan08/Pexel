const navBar = document.querySelector('.header-nav');
const navSearch = document.querySelector('.header-nav__search__header');




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    navBar.classList.add("header-nav__scroll");
    navSearch.classList.add('active');

  } else {
    navBar.classList.remove("header-nav__scroll");
    navSearch.classList.remove('active');
  }
}

//when the user click on the input
const boxDrop = document.querySelector('.search-bar__dropdown__header')
const boxMain = document.querySelector('.header-nav__search__main__header')
function showSearchDropDown(){
  boxDrop.classList.add('show')
  boxMain.style.borderRadius = "6px 6px 0 0";
}

// window.onclick = function (event){
//   if(!event.target.matches('.header-nav__search__main__input__header')){
//   }
// }


// 
const boxDropMain = document.querySelector('.search-bar__dropdown__bottom')
const boxSearchMain = document.querySelector('.header-nav__search__main__bottom')
function showSearchDropDownMain(){
  boxDropMain .classList.add('show')
  boxSearchMain.style.borderRadius = "6px 6px 0 0";
}

window.onclick = function (event){
  if(!event.target.matches('.header-nav__search__main__input')){
    boxDropMain.classList.remove('show')
    boxDrop.classList.remove('show')
    boxMain.style.borderRadius = "6px";

    boxSearchMain.style.borderRadius = "6px";
  }
}

// main-nav-bar__overlay

const boxNavOverlay = document.querySelector(".main-nav-bar__overlay");
const buttonNav = document.querySelector('.js-nav-ham');

buttonNav.onclick = function(){
  boxNavOverlay.classList.toggle("show")
  navBar.classList.toggle("header-nav__scroll");
  navSearch.classList.add('active');

}

