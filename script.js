document.querySelectorAll(".iris_button").forEach((button) => {
  button.addEventListener("click", () => {
    const chatbotContent = button.nextElementSibling;

    button.classList.toggle("iris_button_active");

    if (button.classList.contains("iris_button_active")) {
      chatbotContent.style.maxHeight = chatbotContent.scrollHeight + "px";
    } else {
      chatbotContent.style.maxHeight = 0;
    }
  });
});
