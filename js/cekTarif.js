(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);


function getCursorPosition(event) {
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerHeight + "%";
  
    const eyes1 = document.getElementById("eyes1");
    const eyes2 = document.getElementById("eyes2");
  
    eyes1.style.left = x;
    eyes1.style.top = y;
    eyes1.style.transform = `translate(-${x}, -${y})`;
  
    eyes2.style.left = x;
    eyes2.style.top = y;
    eyes2.style.transform = `translate(-${x}, -${y})`;
  }
  
  const text = document.getElementById("label[for='tujuan']");
  const asalSpan = document.getElementById("span-asal");
  const tujuanSpan = document.getElementById("span-tujuan");
  const number = document.getElementById("quantity");
  const quantitySpan = document.getElementById("span-quantity");

 
  
  
  text.addEventListener("input", () => {
    if (text.value) {
    asalSpan.classList.add("focus-span");
    
    } else {
     asalSpan.classList.remove("focus-span");
    
    }
    
  });
  
  text.addEventListener("input", () => {
    if (text.value) {
    tujuanSpan.classList.add("focus-span");
    
    } else {
     tujuanSpan.classList.remove("focus-span");
    
    }
    
  });

  
  number.addEventListener("input", () => {
    if (number.value) {
      quantitySpan.classList.add("focus-span");
    } else {
      quantitySpan.classList.remove("focus-span");
    }
  });
  


