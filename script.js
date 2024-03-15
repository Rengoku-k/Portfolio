function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function showSection(id) {
    // Hide all sections
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
  if(id==="profile" || id==="contact"){
    document.getElementById(id).style.display = 'flex';
  }
  else{
    document.getElementById(id).style.display = 'block';
  }
    // Show the selected section
   }