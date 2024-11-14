document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("login-modal");

    // Get the button that opens the modal
    var btn = document.getElementById("btn-open-login");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle form submission
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Normally, you would send the login data to the server here.
        // For this example, we'll just log it to the console.
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        if (username === "Proprius" && password === "advocacia") {  // Example credentials
            window.location.href = "pagina_imoveis.html";
        } else {
            alert("Usuário ou senha incorretos");
        }
    });
});
