// Ленивая загрузка
//var myLazyLoad = new LazyLoad();

const swiperIntro = new Swiper(".intro-slider", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: ".intro-slider-manager__next",
        prevEl: ".intro-slider-manager__prev",
    },
});
// Swiper slider RECALL
const swiperStocks = new Swiper(".stocks-slider", {
    navigation: {
      nextEl: ".stocks-slider-manager__next",
      prevEl: ".stocks-slider-manager__prev",
    },
    slidesPerView: 4,
    spaceBetween: 60,
    pagination: {
        el: ".stocks-slider-manager-pagination",
        clickable: true,
    },
    /*breakpoints: {
        768: {
            grid: {
                rows: 1,
            },
        },
        576: {
            //spaceBetween: 30,
            grid: {
                rows: 3,
            },
        },
        320: {
            slidesPerView: "1",
            grid: {
                rows: 3,
            },
        },
    }*/
});

// jQuery function
$(document).ready(function() {

    //serviceImage
    function serviceImage() {
        $('.technic-images__img').click(function() {
            $('.technic-images__img').removeClass('technic-images__img_active');
            $(this).addClass('technic-images__img_active');
            let dataAttributeActive = $('.technic-images__img_active img').attr('src');
            $('.technic-images-main img').attr('src', dataAttributeActive);
        });
    }
    serviceImage()

    //tabsBasket
    function tabsBasket() {
        $('.basket-btns-block label').click(function() {
          let id = $(this).attr('data-tab'), 
          content = $('.basket-tabs[data-tab="'+ id +'"]');
          $('.basket-btns-block label').removeClass('active');
          $(this).addClass('active');
          $('.basket-tabs').removeClass('basket-tabs-active');
          content.addClass('basket-tabs-active');
        });
    };
    tabsBasket();

    //tabsLocalArea
    function tabsLocalArea() {
        $('.office-panel__btn').click(function() {
          let id = $(this).attr('data-tab'), 
          content = $('.office-section[data-tab="'+ id +'"]');
          $('.office-panel__btn').removeClass('office-panel__btn_active');
          $(this).addClass('office-panel__btn_active');
          $('.office-section').removeClass('office-section-show');
          content.addClass('office-section-show');
        });
    };
    tabsLocalArea();

    // history productcount
    function productCount() {
        let productsCountElem = document.querySelector('.products-count span');
        let historyProductsItemElems = document.querySelectorAll('.history-products-item').length;
        if (productsCountElem !== null) {
            productsCountElem.innerHTML = historyProductsItemElems;
        }
    }
    productCount();

    // Show password
    function showPassword() {
        $(".password svg").click(function(){
            if ($(this).prev().is(':password')){
                console.log('yes')
                $(this).prev().attr('type', 'text');
            } else {
                console.log('no')
                $(this).prev().attr('type', 'password');
            }
            
           /* if ($(this).is(':checked')){
                $('#password-input').attr('type', 'text');
            } else {
                $('#password-input').attr('type', 'password');
            }*/
        });
    };
    showPassword();

    //Показать больше
    function moreAbout () {
        $(".main-descr-wrapper").each(function() {
            let more = $(this).find(".more");
            let hide = $(this).find(".hide-content");
            more.click(function(e) {
                e.preventDefault();
                hide.slideToggle();
                more.toggleClass('active');
                $('.main-descr-text').toggleClass('shadow');
                
            });
        });
    }
    moreAbout();

    // Focus form
    /*function focusConsultation() {
        $('.consultation-form-elem__input').each(function() {
            $(this).keyup(function() {
                if($(this).val('') === ''){
                    $(this).css("border", "1px solid red");
                } else {
                    $(this).css("border", "1px solid red");
                }
            });

        });
    };
    focusConsultation();*/
     

    // Акордеон
    function accordion() {
        $(".class-title").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".class-title").not(this).removeClass("open").next().slideUp();
        });
    };
    accordion();

    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
        $('.header-burger').toggleClass('active');
        $('.header-mobile').toggleClass('active ');
        $('html').toggleClass('hidden');
        });
    };
    headerBurger();

    //Стрелка наверх
    function scrollUp () {
        $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
        });

        $('.scroll-up').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 1500);
        });
    };
    scrollUp();

    //Валидации сайта
    function formValidate() {
        $('#consultation-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                message: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 10 символов"
                }
            }
        });
        $('#form-sign-in').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 3
                },
            },
            messages: {
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                password: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
            }
        });
        $('#form-sign-up').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                organization: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 3
                },
                passwordRepeat: {
                    required: true,
                    minlength: 3
                },
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                organization: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                password: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
                passwordRepeat: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 3 символов"
                },
            }
        });
        $('#form-forgot-password').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 2
                },
            },
            messages: {
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                }
            }
        });
    };
    formValidate();
});