
$(document).ready(function () {

    // autoplay hero section video 

    setTimeout(function () {
        document.getElementById("hero-video").play();
    }, 5000);

    // onscroll change header color 
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 500) {
            $("header").css("background-color", "black");
            document.getElementById("hero-video").pause();
            document.getElementById("").display="block";
        } else if($(window).scrollTop() < 5) {
            //remove the background property so it comes transparent again (defined in your css)
            // $("header").css("background-color", "transparent");
            document.getElementById("hero-video").play();
        }
    });

    //owl carousel settings

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    
});

