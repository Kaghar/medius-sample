

var message = document.getElementById('message');
var selectbox = document.getElementById('selectbox');
var dropdown = document.getElementById('dropdown');
var flag = document.getElementById('flagimg');
var country = document.getElementById('countryname');
var countrylabel =document.getElementById('country');
var sidebtn = document.getElementById('sidebtn');
var sidebar = document.getElementById('sidebar');
var sidebarbg = document.getElementById('sidebarbg');
var mobilebtn = document.getElementById('mobilebtn');
var navbar = document.getElementById('navbar');



mobilebtn.addEventListener('click', function(){
    
    if(navbar.style.transform === "translateX(-32rem)") {
        navbar.style.transform = "translateX(0)";
    }else {
        navbar.style.transform = "translateX(-32rem)"
    }
});

$('input[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

selectbox.addEventListener('click', function() {
    
    if(dropdown.style.display === "block") {
        dropdown.style.display = "none"
        countrylabel.style.fontWeight="400";
        
    } else {
        dropdown.style.display = "block"
        countrylabel.style.fontWeight="700";
        
    }
})

dropdown.addEventListener('click', function(event) {
    if(dropdown.style.display === "block") {
        dropdown.style.display = "none"
        countrylabel.style.fontWeight="400";
    } else {
        dropdown.style.display = "block"
        countrylabel.style.fontWeight="700";
    }

    var img = event.target.childNodes[1].childNodes[1].src;
    var text= event.target.childNodes[1].childNodes[3].innerHTML;
    flag.src = img;
    country.innerHTML=text;

})




sidebtn.addEventListener('click', function() {
    
    if(sidebar.style.transform ==="translateX(0%)") {
        sidebar.style.transform = "translateX(101%)";
        sidebarbg.style.pointerEvents ="none";
        sidebarbg.style.backgroundColor ="rgba(0, 0, 0, 0)";
        sidebtn.childNodes[1].innerHTML= "Get in touch";
        sidebtn.style.backgroundColor ="#86c112";
        sidebtn.style.left="-6.9rem";
        
        
    } else {
        sidebar.style.transform = "translateX(0%)";
        sidebarbg.style.pointerEvents ="auto";
        sidebarbg.style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        sidebtn.childNodes[1].innerHTML= "Close";
        sidebtn.style.backgroundColor ="#65920f";
        sidebtn.style.left="-6rem";
        
    }
})


$(document).ready(function(){

    /************* Nav links ****************/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
            });
        }
        }
    });
});