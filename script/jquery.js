$(document).ready(() => {
    //window.alert("Hello, world!");
    $("body").removeClass("dark-theme");
    $(".sidebar").removeClass("dark-theme");
    $(".header").removeClass("dark-theme");

    $("#toggle-theme-icon").attr("src", "assets/icons/darkmood.png");

    $("#theme-toggle").click(() => {
        $("body").toggleClass("dark-theme");
        $(".sidebar").toggleClass("dark-theme");
        $(".header").toggleClass("dark-theme");

        if ($("body").hasClass("dark-theme")) {
            $("#toggle-theme-icon").attr("src", "assets/icons/lightmood.png");
            $("#toggle-theme-icon").attr("alt", "Light theme");
        } else {
            $("#toggle-theme-icon").attr("src", "assets/icons/darkmood.png");
            $("#toggle-theme-icon").attr("alt", "Dark theme");
        }
        //assets/icons/sun.png
    });
})