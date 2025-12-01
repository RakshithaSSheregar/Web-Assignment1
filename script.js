$(document).ready(function () {
    $("#animateBtn").click(function () {
        $(".profile").fadeOut(300).fadeIn(300);
        $(".intro-text").slideToggle().slideToggle();
        alert("Welcome to my Website! 🙂");
    });
});