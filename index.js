//-------------------------BIKIN NAVBAR--------------------------
// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var k = 0; k < close.length; k++) {
      close[k].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var m = 0; m < backdrop.length; m++) {
      backdrop[m].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
//-------------------------END OF NAVBAR--------------------------

//-------------------------Filter Feature (Navbar)--------------------------
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
let isDropdownOpen = false;

function toggleDropdown() {
  isDropdownOpen = !isDropdownOpen;
  if (isDropdownOpen) {
    dropdownMenu.classList.remove("hidden");
  } else {
    dropdownMenu.classList.add("hidden");
  }
}

toggleDropdown();

dropdownButton.addEventListener("click", toggleDropdown);

window.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
    isDropdownOpen = false;
  }
});
//-------------------------End of Filter Feature (Navbar)--------------------------

//-------------------------Product Page--------------------------
let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
  let main = elements[i];
  main.addEventListener("click", function () {
    let element = main.parentElement.parentElement;
    let andicators = main.querySelectorAll("img");
    let child = element.querySelector("#sect");
    child.classList.toggle("hidden");
    andicators[0].classList.toggle("rotate-180");
  });
}
//-------------------------Product Page (END)--------------------------
