var message = document.querySelector(".error-message-highlighted");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    message.focus();
    e.preventDefault();
  }
});
