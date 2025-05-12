document.addEventListener("DOMContentLoaded", () => {
    renderNavber();
});

const renderNavber = () => {
    const navber = document.querySelector(".header");
    const navberHtml = `
        <div class="logo"> <h1>EMCSS</h1> </div>
        <button  class="theme-toggle" id="theme-toggle">
            <img src="assets/icons/sun.png" alt="sun icon" class="sun-icon"/>
            <img src="assets/icons/moon.png" alt="moon icon" class="moon-icon"/>
        </button>
        <div class="header-right"> <a href="#" target="_blank"><img src="assets/icons/github.png" alt="github repository"/></a> </div>
    `;
    navber.innerHTML = navberHtml;
}