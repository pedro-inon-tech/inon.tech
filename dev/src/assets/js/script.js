
jQuery(function () {
    $('.--topSlide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        swipe: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 769, // 767px以下のサイズに適用
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 425, // 767px以下のサイズに適用
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});


jQuery(function () {
    $('.--bottomSlide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        swipe: false,
        touchMove: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 769, // 767px以下のサイズに適用
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 425, // 767px以下のサイズに適用
                settings: {
                    slidesToShow: 2,
                },
            },
        ],

    });
});

jQuery(function () {
    jQuery('#top').click(function () {
        jQuery('#top3').toggleClass("close"),
            jQuery('#top4').toggleClass("close");
        jQuery('#top1').toggleClass("open");
        jQuery('#top2').toggleClass("open");
        jQuery('#top5').toggleClass("open");
        jQuery('#top').toggleClass("close");
    });
});

jQuery(function () {
    jQuery('#top1').click(function () {
        jQuery('#top3').removeClass("close"),
            jQuery('#top4').removeClass("close");
        jQuery('#top1').removeClass("open");
        jQuery('#top2').removeClass("open");
        jQuery('#top5').removeClass("open");
        jQuery('#top').removeClass("close");
    });
});


jQuery(function () {
    jQuery('#middle').click(function () {
        jQuery('#middle3').toggleClass("close"),
            jQuery('#middle4').toggleClass("close");
        jQuery('#middle1').toggleClass("open");
        jQuery('#middle2').toggleClass("open");
        jQuery('#middle5').toggleClass("open");
        jQuery('#middle').toggleClass("close");
    });
});

jQuery(function () {
    jQuery('#middle1').click(function () {
        jQuery('#middle3').removeClass("close"),
            jQuery('#middle4').removeClass("close");
        jQuery('#middle1').removeClass("open");
        jQuery('#middle2').removeClass("open");
        jQuery('#middle5').removeClass("open");
        jQuery('#middle').removeClass("close");
    });
});

jQuery(function () {
    jQuery('#bottom').click(function () {
        jQuery('#bottom3').toggleClass("close"),
            jQuery('#bottom4').toggleClass("close");
        jQuery('#bottom1').toggleClass("open");
        jQuery('#bottom2').toggleClass("open");
        jQuery('#bottom5').toggleClass("open");
        jQuery('#bottom').toggleClass("close");
    });
});

jQuery(function () {
    jQuery('#bottom1').click(function () {
        jQuery('#bottom3').removeClass("close"),
            jQuery('#bottom4').removeClass("close");
        jQuery('#bottom1').removeClass("open");
        jQuery('#bottom2').removeClass("open");
        jQuery('#bottom5').removeClass("open");
        jQuery('#bottom').removeClass("close");
    });
});

jQuery(document).ready(function () {
    jQuery("#topBtn").hide();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery("#topBtn").fadeIn("fast");
        } else {
            jQuery("#topBtn").fadeOut("fast");
        }
        scrollHeight = jQuery(document).height(); //ドキュメントの高さ 
        scrollPosition = jQuery(window).height() + jQuery(window).scrollTop(); //現在地 
        footHeight = jQuery("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        btnHeight = jQuery("#topBtn").innerHeight();
    });
    jQuery('#topBtn').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

jQuery(function () {
    jQuery('.l-headerPC__menuBtn').click(function () {
        jQuery('.l-headerPC__menuBtn').toggleClass("open");
        jQuery('.l-PCMenu').toggleClass("open");
        jQuery('.l-PCMenu__item').toggleClass("open");
    });
});

jQuery(function () {
    jQuery('.l-PCMenu__item').click(function () {
        jQuery('.l-headerPC__menuBtn').removeClass("open");
        jQuery('.l-PCMenu').removeClass("open");
        jQuery('.l-PCMenu__item').removeClass("open");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    // タブをクリックすると実行する関数
    function tabSwitch() {
        // タブのclassの値を変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
}, false);

jQuery(function () {
    jQuery('.PR__link').click(function () {
        jQuery('.modal-container').toggleClass("active");
        $('body').css('overflow-y', 'hidden');
    });
});

jQuery(function () {
    jQuery('.modal-close').click(function () {
        jQuery('.modal-container').removeClass("active");
        $('body').css('overflow-y', 'auto');
    });
});

jQuery(function () {
    jQuery('.l-headerPC__menuBtn').click(function () {
        jQuery('.modal-container').removeClass("active");
        $('body').css('overflow-y', 'auto');
    });
});

jQuery(function () {
    jQuery('.l-footer__topBtn').click(function () {
        jQuery('.modal-container').removeClass("active");
        $('body').css('overflow-y', 'auto');
    });
});

jQuery(function () {
    jQuery('.open').click(function () {
        jQuery('.modal-container').removeClass("active");
        $('body').css('overflow-y', 'auto');
    });
});


jQuery(document).ready(function () {
    $('.dc-menu-trigger').click(function () {
        $('nav').toggleClass("dc-menu-open");
        $('.menu-overlay').toggleClass("open");
        $('.l-headerSP__bar').toggleClass("shownav");
    });
});

jQuery(function () {
    jQuery('.l-SP__item').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top - 75;//idの上部の距離からHeaderの高さを引いた値を取得
        $('body,html').animate({ scrollTop: pos }, 0); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        $('nav').removeClass("dc-menu-open");
        $('.menu-overlay').removeClass("open");
        $('.l-headerSP__bar').removeClass("shownav");
        return false;
    });
});

jQuery(function () {
    jQuery('.p-frontMembers__listItem1').click(function () {
        $('.member-top1').toggleClass("active");
        $('.member-top2').toggleClass("active");
        $('.member-top3').removeClass("active");
        $('.member-top4').removeClass("active");
    });
});

jQuery(function () {
    jQuery('.p-frontMembers__listItem2').click(function () {
        $('.member-top3').toggleClass("active");
        $('.member-top4').toggleClass("active");
        $('.member-top1').removeClass("active");
        $('.member-top2').removeClass("active");
    });
});

jQuery(function () {
    function end_loader() {
        jQuery('.loader').fadeOut(800);
    }
    jQuery(window).on('load', function () {
        setTimeout(function () {
            end_loader();
        }, 2000)
    })
});

jQuery(function () {
    jQuery('.Members__sp').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: false,
        pauseOnHover: true,
        centerMode: true,
    });
});


jQuery(function () {
    $('.service-slick').slick({
        arrows: false,
        dots: true,
        infinite: false,
        accessibility: false,
        slidesToShow: 1,
        centerMode: true,
        draggable: true,
    });
});

