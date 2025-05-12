var jq = $.noConflict();
jq(document).ready(() => {
    jq("#theme-toggle").click(() => {
        jq("body").toggleClass("dark-theme");
        
        if (jq("body").hasClass("dark-theme")) {
            jq("#theme-toggle .sun-icon").hide();
            jq("#theme-toggle .moon-icon").show();
        } else {
            jq("#theme-toggle .sun-icon").show();
            jq("#theme-toggle .moon-icon").hide();
        }
        
    });
})