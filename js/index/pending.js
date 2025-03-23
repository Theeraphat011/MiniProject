document.addEventListener("DOMContentLoaded", async () => {
    const showSpinner = (e) => {
        e.preventDefault();
        document.querySelector(".loading-overlay").style.display = "flex";
        document.querySelector(".spinner").style.display = "block";
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 400);
    };

    // Add event listeners to links
    document.getElementById("register-link").addEventListener("click", showSpinner);
    document.getElementById("login-link").addEventListener("click", showSpinner);
});
