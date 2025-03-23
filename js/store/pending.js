document.addEventListener("DOMContentLoaded", async () => {
    const showSpinner = (e) => {
        e.preventDefault();
    
        const overlay = document.querySelector(".loading-overlay");
        const spinner = document.querySelector(".spinner");
    
        if (!overlay || !spinner) {
            console.error("Missing loading overlay or spinner in the DOM.");
            return;
        }
    
        overlay.style.display = "flex";
        spinner.style.display = "block";
    
        setTimeout(() => {
            if (e.target && e.target.href) {
                window.location.href = e.target.href;
            } else {
                console.error("Invalid link: Missing href.");
            }
        }, 400);
    };

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", showSpinner);
    })
});
