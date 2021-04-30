/**
 * Header 導覽列向下滾動時隱藏，向上滾動時顯現
 */

lastScrollY = 0; /* 已經滾動的高度 */
window.addEventListener('scroll', function () {
    var st = this.scrollY; /* 現在滾動的高度 */
    /* 判斷是向上捲動，而且捲軸超過 200px */
    if (st < lastScrollY) {
        $("body").removeClass('hideUp');
        $(".bread").addClass("breadshow");
    } else {
        $("body").addClass('hideUp');
        $(".bread").removeClass("breadshow");
    }
    lastScrollY = st;
});


$(function () {
    $('.logo').on('mouseenter', function () {
        $('.logo-img').hide();
        $('.logo-text').show();
    })

    $('.logo').on('mouseleave', function () {
        $('.logo-img').show();
        $('.logo-text').hide();
    })
})


$(function () {
    $('.menu-item-search').on('mouseenter', function () {

        $(this).addClass('test');

    })
    $('.menu-item-search').on('mouseleave', function () {

        $(this).removeClass('test');

    })



    $('.menu-item-search').on('click', function () {
        $(this).addClass('change');

    })
})


$(function () {
    $('.dropdown-list1').on('mouseover', function () {

        $('.dropdown-list1').css('background', '#FFF ');
        $(this).css('background', '#FFD100 ');
        $('.dropdown-list1').parent().css('height', '+200');
        $('.menu-item-search').addClass('active2');
    })
})


$(function () {
    $('.menu-item-search').click(function () {

        $(this).addClass('active');
        $('.modal').addClass('open');
        $('body').addClass('frozen');

    })

    $(document).mouseup(function (e) {
        var container = $(".header"); // 這邊放你想要排除的區塊
        var menu = $(".menu-item-search");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            menu.removeClass('active');
            $('.modal').removeClass('open');
            $('body').removeClass('frozen');
            $('.menu-item-search').removeClass('change');
        }
    });
})



$(function () {
    $('.menu-dropdown2 ').hide();
    $('.dropdown-list1').on('mouseover', function () {

        $('.menu-dropdown2 ').hide();

        $(`#dropdownList2-${$(this).attr('id').substr(14)}`).show();
    })


})

// 滑動
$(function () {
    $('.section-move-bg').on('click', function () {
        $(this).addClass('open');
        $(document).click(function (e) {
            var container = $(".section-move-bg"); // 這邊放你想要排除的區塊
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.section-move-bg').removeClass('open')
            }
        });
    })
})


// FAQ
$(function () {

    $(".answer-family-q").click(function () {

        if ($(this).hasClass("long")) {
            $(".answer-family-q").removeClass("long");

        } else {

            $(".answer-family-q").removeClass("long");
            $(this).addClass("long");
        }
    })
})