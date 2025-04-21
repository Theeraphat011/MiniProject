export const showSpinner = (e, link) => {
    e.preventDefault();

    const overlay = document.querySelector(".loading-overlay");
    const spinner = document.querySelector(".spinner");

    overlay.style.display = "flex";
    spinner.style.display = "block";

    setTimeout(() => {
        window.location.href = link.href;
    }, 400);
};
