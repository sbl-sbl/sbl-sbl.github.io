function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

/* LOADER CONTAINER */
window.addEventListener('load', function() {
    // Animasi untuk memindahkan logo ke kiri atas
    gsap.to('.loadLogo', { 
        duration: 1,
        opacity: 1,
        ease: "Expo.easeInOut",
        onComplete: function() {
            gsap.to('.loader-container', {
                opacity: 0,
                duration: 1,
                zIndex: -999,
                ease: "Expo.easeInOut",
                onComplete: function() {
                    gsap.to('.loader-container', {
                        display: "none",
                        duration: 0
                    })
                }
            });
        }
    });
});


/* SWIPER FOR PACKAGES SERVICES and TEAM IMGAGES */
function resetCSS() {
    var allImages = document.querySelectorAll('.mctbImgBox img');
    var allNames = document.querySelectorAll('.mctbTxt li h2');
    var allNames2 = document.querySelectorAll('.mctbTxtD li h2');
    
    allImages.forEach(function(img) {
      img.style.filter = 'grayscale(100%)';
    });
    
    allNames.forEach(function(name) {
      name.style.color = '';
    });
    allNames2.forEach(function(name) {
      name.style.color = '';
    });
}
function swiperServ() {
    var swiper = new Swiper(".mCservicesBot", {
        slidesPerView: "auto",
        spaceBetween: 30,
    });

    if ($(window).width() >= 1201) {
        var swiper3 = new Swiper('.deskSwipe', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            on: {
                slideChange: function() {
                    var activeIndex = this.realIndex;
                    resetCSS();
                    var activeSlide = document.querySelectorAll('.swiper-slide')[activeIndex];
                    var nameList = document.querySelectorAll('.mctbTxtD li');
                    nameList.forEach(function(name, index) {
                        if (index === activeIndex) {
                            name.querySelector('h2').style.color = '#9fef00';
                          }
                    });
                }
            }
        });
    } else {
        var swiper2 = new Swiper('.anotherDesk', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            on: {
                slideChange: function() {
                    var activeIndex = this.realIndex;
                    resetCSS();
                    var activeSlide = document.querySelectorAll('.swiper-slide')[activeIndex];
                    var nameList = document.querySelectorAll('.mctbTxt li');
                    nameList.forEach(function(name, index) {
                        if (index === activeIndex) {
                            name.querySelector('h2').style.color = '#9fef00';
                          }
                    });
                }
            }
        });
    } 
}


/* CHECKING DEVICE IS TABLET? */
function isTablet() {
    var screenWidth = $(window).width();
    var isTabletSize = screenWidth >= 600 && screenWidth <= 1024;
    return isTabletSize;
}
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        $('.tabAlert').css('display', 'block');
        $('.mainContainer').css('opacity', '0');
    } else {
        $('.mainContainer').css('opacity', '1');
        $('.tabAlert').css('display', 'none');
    }
}
$(document).ready(function() {
    if (isTablet()) {
        checkOrientation();
        $(window).on('resize', checkOrientation);
    }
});


/* HOVER ANIMATION FOR NAVIGATION */
function hoverAnimationM(target, xValue) {
    gsap.to(target, {
      y: xValue,
      duration: 0.3,
    });
}
function hoverAnimation(target, xValue) {
    gsap.to(target, {
      x: xValue,
      duration: 0.3,
    });
}
function navFromHome() {
    if ($(window).width() <= 600) {
        $('.mNServices').hover(function(){
            hoverAnimationM('.mobileMenu', 40);
            hoverAnimationM('.mNAbout', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
        });
    
        $('.mNTeams').hover(function(){
            hoverAnimationM('.mobileMenu', 60);
            hoverAnimationM('.mNAbout', 40);
            hoverAnimationM('.mNServices', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
            hoverAnimationM('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimationM('.mobileMenu', 80);
            hoverAnimationM('.mNAbout', 60);
            hoverAnimationM('.mNServices', 40);
            hoverAnimationM('.mNTeams', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
            hoverAnimationM('.mNServices', 0);
            hoverAnimationM('.mNTeams', 0);
        });
    }

    else if ($(window).width() >= 601 && $(window).width() <= 1440) {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 50);
            hoverAnimation('.mNServices', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 75);
            hoverAnimation('.mNServices', 50);
            hoverAnimation('.mNTeams', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }

    else {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 70);
            hoverAnimation('.mNServices', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 105);
            hoverAnimation('.mNServices', 70);
            hoverAnimation('.mNTeams', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }
    
}
function navFromAbout() {
    if ($(window).width() <= 600) {
        $('.mNTeams').hover(function(){
            hoverAnimationM('.mobileMenu', 40);
            hoverAnimationM('.mNServices', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimationM('.mobileMenu', 60);
            hoverAnimationM('.mNServices', 40);
            hoverAnimationM('.mNTeams', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNServices', 0);
            hoverAnimationM('.mNTeams', 0);
        });
    }

    else if ($(window).width() >= 601 && $(window).width() <= 1440) {
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNServices', 25);
        }, function() {
            hoverAnimation('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNServices', 50);
            hoverAnimation('.mNTeams', 25);
        }, function() {
            hoverAnimation('.mNServices', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }

    else {
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNServices', 35);
        }, function() {
            hoverAnimation('.mNServices', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNServices', 70);
            hoverAnimation('.mNTeams', 35);
        }, function() {
            hoverAnimation('.mNServices', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }
    
}
function navFromServ() {
    if ($(window).width() <= 600) {
    
        $('.mNTeams').hover(function(){
            hoverAnimationM('.mobileMenu', 40);
            hoverAnimationM('.mNAbout', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimationM('.mobileMenu', 60);
            hoverAnimationM('.mNAbout', 40);
            hoverAnimationM('.mNTeams', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
            hoverAnimationM('.mNTeams', 0);
        });
    }

    else if ($(window).width() >= 601 && $(window).width() <= 1440) {
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 50);
            hoverAnimation('.mNTeams', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }

    else {
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 70);
            hoverAnimation('.mNTeams', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNTeams', 0);
        });
    }
    
}
function navFromTeam() {
    if ($(window).width() <= 600) {
        $('.mNServices').hover(function(){
            hoverAnimationM('.mobileMenu', 40);
            hoverAnimationM('.mNAbout', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimationM('.mobileMenu', 60);
            hoverAnimationM('.mNAbout', 40);
            hoverAnimationM('.mNServices', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
            hoverAnimationM('.mNServices', 0);
        });
    }

    else if ($(window).width() >= 601 && $(window).width() <= 1440) {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 50);
            hoverAnimation('.mNServices', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    }

    else {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
    
        $('.mNContact').hover(function(){
            hoverAnimation('.mNAbout', 70);
            hoverAnimation('.mNServices', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    }
    
}
function navFromContact() {
    if ($(window).width() <= 600) {
        $('.mNServices').hover(function(){
            hoverAnimationM('.mobileMenu', 40);
            hoverAnimationM('.mNAbout', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
        });
    
        $('.mNTeams').hover(function(){
            hoverAnimationM('.mobileMenu', 60);
            hoverAnimationM('.mNAbout', 40);
            hoverAnimationM('.mNServices', 20);
        }, function() {
            hoverAnimationM('.mobileMenu', 0);
            hoverAnimationM('.mNAbout', 0);
            hoverAnimationM('.mNServices', 0);
        });
    }

    else if ($(window).width() >= 601 && $(window).width() <= 1440) {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 50);
            hoverAnimation('.mNServices', 25);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    }

    else {
        $('.mNServices').hover(function(){
            hoverAnimation('.mNAbout', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
        });
        
        $('.mNTeams').hover(function(){
            hoverAnimation('.mNAbout', 70);
            hoverAnimation('.mNServices', 35);
        }, function() {
            hoverAnimation('.mNAbout', 0);
            hoverAnimation('.mNServices', 0);
        });
    }
    
}
// TRIGGER HOVER
function initJS() {
    if (window.location.pathname.endsWith('/') || window.location.pathname.includes('/index')) {
        navFromHome();
    }
    else if (window.location.pathname.endsWith('/about')) {
        navFromAbout();
    }
    else if (window.location.pathname.endsWith('/services')) {
        navFromServ();
    }
    else if (window.location.pathname.endsWith('/teams')) {
        navFromTeam();
    }
    else if (window.location.pathname.endsWith('/contact')) {
        navFromContact();
    }
}

function whichNavClicked() {
    if ($(window).width() <= 600) {
        var yPosition;

        $(document).on('click', '.mNAboutT, .mNServicesT, .mNTeamsT, .mNContactT', function() {
            yPosition = $('.mainNav').offset().top;
            pageTransition(yPosition);
        });

        $(document).on('click', '.aboutX', function() {
            yPosition = $('.aboutX').offset().top;
            pageTransition(yPosition);
        });

        $(document).on('click', '.servicesX', function() {
            yPosition = $('.servicesX').offset().top;
            pageTransition(yPosition);
        });

        $(document).on('click', '.teamsX', function() {
            yPosition = $('.teamsX').offset().top;
            pageTransition(yPosition);
        });

        $(document).on('click', '.contactX', function() {
            yPosition = $('.contactX').offset().top;
            pageTransition(yPosition);
        });
    }
    else {
        var position;

        $(document).on('click', '.mNAboutT, .mNServicesT, .mNTeamsT, .mNContactT', function() {
            position = $('.mainNav').offset().left;
            pageTransition(position, false);
        });

        // BOTTOM START HERE
        $(document).on('click', '.aboutX', function() {
            position = $('.aboutX').offset().left;
            pageTransition(position, false);
        });

        $(document).on('click', '.servicesX', function() {
            position = $('.servicesX').offset().left;
            pageTransition(position, false);
        });

        $(document).on('click', '.teamsX', function() {
            position = $('.teamsX').offset().left;
            pageTransition(position, false);
        });

        $(document).on('click', '.contactX', function() {
            position = $('.contactX').offset().left;
            pageTransition(position, false);
        });
    }
}
/* BARBA AND GSAP PAGE TRANSITION */
function pageTransition(position, isYPosition = true) {
    var firstNav = $('.mainNav').offset().top;
    var tl = gsap.timeline();
    if (isYPosition) {
        tl.to(".mainNav", {
            duration: 1,
            y: firstNav - position,
            ease: "Expo.easeInOut",
            zIndex: 999,
        })
        .to(".mainContent", {
            duration: 1,
            y: -position,
            ease: "Expo.easeInOut",
        }, 0);
    }
    else {
        tl.to(".mainNav", {
            duration: 1,
            x: -position,
            ease: "Expo.easeInOut",
            zIndex: 999,
        })
        .to(".mainContent", {
            duration: 1,
            x: -position,
            ease: "Expo.easeInOut",
        }, 0);
    }
}

function contentAnimation() {
    if ($(window).width() <= 600) {
        var tl = gsap.timeline();
        var siteStatus = $('.mainNav').offset().top;
        var hViewPort = $(window).height();
        var hmobMenu = $('.mobileMenu').height();
        var navPosition = (hViewPort - hmobMenu);

        $(document).on('click', '.mNAboutT, .mNServicesT, .mNTeamsT, .mNContactT', function() {
            yPosition = $('.mainNav').offset().top;
        });
        
        $(document).on('click', '.aboutX', function() {
            yPosition = $('.aboutX').offset().top;
        });
        $(document).on('click', '.servicesX', function() {
            yPosition = $('.servicesX').offset().top;
        });
        $(document).on('click', '.teamsX', function() {
            yPosition = $('.teamsX').offset().top;
        });
        $(document).on('click', '.contactX', function() {
            yPosition = $('.contactX').offset().top;
        });


        tl.from(".mainContent", {
            duration: 1,
            y: -yPosition,
            ease: "Expo.easeInOut",
            onComplete: function() {
                tl.to(".h1", {
                    duration: 1,
                    opacity: 1,
                    stagger: 0.02,
                    ease: "Expo.easeOut",
                     y: 0
                });
                gsap.to(".faded", {
                    duration: 1,
                    opacity: 1,
                    ease: "Expo.easeInOut",
                    delay: 1,
                });
            }
        })
        .fromTo(".mainNav",{
            y: siteStatus,
        }, {
            duration: 1,
            y: navPosition,
            ease: "Expo.easeInOut",
            onComplete: function () {
                mobileNavigation();
            }
        },"-=1");
    } else {
        var tl = gsap.timeline();

        $(document).on('click', '.mNAboutT, .mNServicesT, .mNTeamsT, .mNContactT', function() {
            xPosition = $('.mainNav').offset().left;
        });

        // BOTTOM START HERE
        $(document).on('click', '.aboutX', function() {
            xPosition = $('.aboutX').offset().left;
        });

        $(document).on('click', '.servicesX', function() {
            xPosition = $('.servicesX').offset().left;
        });

        $(document).on('click', '.teamsX', function() {
            xPosition = $('.teamsX').offset().left;
        });

        $(document).on('click', '.contactX', function() {
            xPosition = $('.contactX').offset().left;
        });

        tl.from(".mainContent", {
            duration: 1,
            x: -xPosition,
            ease: "Expo.easeInOut",
            onComplete: function() {
                tl.to(".h1", {
                    duration: 1,
                    opacity: 1,
                    stagger: 0.02,
                    ease: "Expo.easeOut",
                    y: 0
                });
                gsap.to(".faded", {
                    duration: 1,
                    opacity: 1,
                    ease: "Expo.easeInOut",
                    delay: 1.5,
                });
            }
        })
        .from(".mainNav", {
            duration: 1,
            x: -xPosition,
            ease: "Expo.easeInOut",
        },"-=1");
        
    }
}

/* MOBILE NAV */
var initialShowingNav = null;
function mobileNavigation() {
    if ($(window).width() <= 600) {
        if (initialShowingNav === null) {
            var hViewPort = $(window).height();
            var hmobMenu = $('.mobileMenu').height();
            var navPosition = (hViewPort - hmobMenu);
            var totalNav = 0;
            $('.mmClasses').each(function(){
                totalNav += $(this).height();
            });
            initialShowingNav = (hViewPort - (hmobMenu + totalNav));
        }
    
        var hViewPort = $(window).height();
        var hmobMenu = $('.mobileMenu').height();
        var navPosition = hViewPort - hmobMenu;
        var totalNav = 0;
        $('.mmClasses').each(function(){
            totalNav += $(this).height();
        });
        var showingNav = hViewPort - (hmobMenu + totalNav);
    
        var mainNavSelector = window.location.pathname.endsWith('/') || window.location.pathname.includes('/index') ? '.mainNav' : '.mainNavB';
    
        $(document).on('click', function(event) {
            var mainNav = $(mainNavSelector);
            if (mainNav.hasClass('activeNav') && !$(event.target).closest(mainNavSelector + ', .mobileMenu').length){
                gsap.to(mainNavSelector, {
                    y: navPosition,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                mainNav.removeClass('activeNav');
            }
        });
    
        $('.mobileMenu').on('click', function (event) {
            var mainNav = $(mainNavSelector);
            if (mainNav.hasClass('activeNav')) {
                gsap.to(mainNavSelector, {
                    y: navPosition,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                mainNav.removeClass('activeNav');
            } else {
                gsap.to(mainNavSelector, {
                    y: showingNav,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                mainNav.addClass('activeNav')
            }
            event.stopPropagation();
        });
    }
}

/* MOBILE DETAILS FUNCTIONS */
function openModal(modal) {
    gsap.to(modal, {
        duration: 0.2,
        y: 0,
        opacity: 1,
        zIndex: 999,
    })
}
function closeModal(modal) {
    $(modal).on('click', function() {
        gsap.to(modal, {
            duration: 0.2,
            y: -100,
            opacity: 0,
            zIndex: -999,
        })
    });
}
function detailsMob() {
    $('.ad1').on('click', function() {
        openModal('.d1');
        closeModal('.d1');
    });
    $('.ad2').on('click', function() {
        openModal('.d2');
        closeModal('.d2');
    });
    $('.ad3').on('click', function() {
        openModal('.d3');
        closeModal('.d3');
    });
    $('.ad4').on('click', function() {
        openModal('.d4');
        closeModal('.d4');
    });
}

$(function () {
    whichNavClicked();
    initJS();
    mobileNavigation();
    detailsMob()

    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    // pageTransition();
                    await delay(1300);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                    initJS();
                    swiperServ();
                    detailsMob()
                },

                async once(data) {
                    contentAnimation();
                    initJS();
                    swiperServ();
                    detailsMob()
                },
            },
        ],
    });
});

