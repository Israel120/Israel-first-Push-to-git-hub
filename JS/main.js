const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(item => {
  const header = item.querySelector(".collapsible__header");
  header.addEventListener("click", () => {
    item.classList.toggle("collapsible__expanded");
  });
});