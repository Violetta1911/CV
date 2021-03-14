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

// function follow(event) {
//   //   get #
//   const link = event.target.hash;

//   //   get element with #

//   const element = document.querySelector(link);

//   //  get coordinates of element
//   let coordinates = element.offsetHeight;

//   //  get header height
//   const header = document.querySelector(".header").offsetHeight;

//   coordinates = element.offsetTop - header;

//   return (element.scrollTop = coordinates);
// }

// const followPage = document.querySelectorAll(".follow");
// followPage.forEach(function (currentBtn) {
//   currentBtn.addEventListener("click", follow);
// });

$(function () {
  $(".btn").on("click", function () { 
    $(".menu-list").slideToggle("");
  });
  $(".close").on("click", function () { 
    $(".menu-list").slideToggle("");
  });

  //  $(".follow").on("click", function () {
  // $(".path").offset({ top: 60});
  // });

   handleSticky();
});
