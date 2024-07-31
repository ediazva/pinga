const header_menu = Array.from(document.getElementsByClassName("header-menu"));
header_menu.forEach(el => {
  el.addEventListener("mouseenter", ev => {init_dropdown(ev.currentTarget)});
  el.addEventListener("mouseleave", ev => {close_dropdown(ev.currentTarget)});
});

/**
 * 
 * @param {HTMLElement} self 
 */
function init_dropdown(self) {
  const dropdown = self.parentElement.getElementsByClassName("header-submenu");
  if(dropdown.length != 0) {
    dropdown[0].hidden = !dropdown[0].hidden;
    focus(true);
  }
}

/**
 * 
 * @param {HTMLElement} self 
 */
function close_dropdown(self) {
  const dropdown = self.getElementsByClassName("header-submenu");
  if(dropdown.length != 0 && !dropdown[0].hidden) {
    dropdown[0].hidden = true;
    focus(false);
  }
}

function focus(show) {
  const focusModal = document.getElementById("focusModal");
  focusModal.hidden = !show;
}