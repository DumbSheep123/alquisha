const button = document.getElementById("button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
	message.innerText = "You clicked the button! Congrats!";
});
