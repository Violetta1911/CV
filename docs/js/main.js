function handleSticky() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  const navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

// ********************************************************************************************************

const followPages = document.querySelectorAll(".follow");
const linkCoordinates= document.querySelectorAll(".path");

function followLink(link) {
    
  const gotoSectionValue = 
      linkCoordinates.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector(".header").offsetHeight;

    window.scrollTo({
      top: gotoSectionValue,
      behaivor: "smooth",
    });
    link.preventDefault();
  }

  followPages.forEach(function (currentBtn) {
    currentBtn.addEventListener("click", followLink(link));
    });

$(function () {
  $(".btn").on("click", function () {
    $(".menu-list").slideToggle("");
  });
  $(".close").on("click", function () {
    $(".menu-list").slideToggle("");
  });

  $(".follow").on("click", function () {
    $(".path").offset(function (i, coord) {
      let newCoord = {};

      newCoord.top = coord.top - 60;

      newCoord.left = coord.left;

      return newCoord;
    });
  });

  handleSticky();

});

