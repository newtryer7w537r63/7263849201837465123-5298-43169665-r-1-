const button = document.getElementById("changeBtn");
const title = document.getElementById("title");

button.addEventListener("click", function() {
    title.textContent = "You clicked the button!";
});
