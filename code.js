document.addEventListener('DOMContentLoaded', function() {
	let button1 = document.getElementById("standard")
	button1.addEventListener('click', function() {
		alert("Now redirecting to: Standard Model Viewer.\nPress \"OK\" to continue...");
		location.href = "pages/standardViewer.html";
	})

	let button2 = document.getElementById("ar") 
	button2.addEventListener("click", function() {
		alert("Now redirecting to: Augmented Reality Model Viewer.\nPlease Stand by...");
	})	
})
