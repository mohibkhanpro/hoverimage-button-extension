document.addEventListener("mouseover", function (event) {
  if (event.target.tagName === "IMG") {
    const button = document.createElement("button");
    button.textContent = "Button";
    button.style.position = "absolute";

    const imgRect = event.target.getBoundingClientRect();
    button.style.top = `${imgRect.top + window.scrollY}px`;
    button.style.left = `${imgRect.right + window.scrollX - 61}px`;

    document.body.appendChild(button);

    event.target.addEventListener("mouseleave", function () {
      button.remove();
    });

    button.addEventListener("click", function (event) {
      alert("Button clicked!");
    });
  }
});
