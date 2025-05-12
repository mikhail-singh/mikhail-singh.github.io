/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
  var nav = document.getElementById("navbar");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
