var elemen = document.querySelectorAll(".elemen"); // to select all the elements with same name class/id

elemen.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    //this event listner will work as soon as mouse enters the selected element zone
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    //this event listner will work as soon as mouse leaves the selected element zone
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (deta) => {
    val.childNodes[3].style.left = deta.x + "px";
  });
});
