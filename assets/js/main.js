$(document).ready(function(){
    // Get the span names
    let about = $(".about"),
        more = $(".more"),
        rightContentAboutSection = $(".right-content-about"),
        rightContentMoreSection = $(".right-content-more");
    
    // Add event listeners
    about.click(e =>{
        e.preventDefault();
        rightContentAboutSection.removeClass("hide");
        rightContentMoreSection.addClass("hide");
        $("html, body").css({
            "backgroundColor": "#333959"
        });
    });

    more.click(e => {
        e.preventDefault();
        rightContentAboutSection.addClass("hide");
        rightContentMoreSection.toggleClass("hide");
        $("html, body").css({
            "backgroundColor": "#FFF",
            "color": "#9A9A9A"
        });
    });

    $("h1, h2, h3").css("color", "#9A9A9A");
})