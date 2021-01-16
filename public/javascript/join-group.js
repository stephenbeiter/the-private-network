document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems);
});

// get all groups
async function joinGroupHandler(event) {
  event.preventDefault();
}

document.querySelector(".dropdown-trigger").addEventListener("click", joinGroupHandler);
