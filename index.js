
    function toggleMenu() {
      var links = document.getElementsByClassName("link");
      for (let i = 0; i<  links.length; i++) {
        links[i].classList.toggle("show");
      }
    }
 