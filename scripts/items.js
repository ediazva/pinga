Array.from(document.getElementsByTagName("input")).filter(x => x.type === "tel").forEach(x => {
  x.addEventListener("input", just_number);
});

/**
 * 
 * @param {Event} ev 
 */
function just_number(ev) {
  ev.target.value = ev.target.value.replace(/[^\d\s]/g,'');
}