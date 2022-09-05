$(function () {


    // header pc_ver sub_bg
    $('.gnb .top_menu').mouseenter(function () {
        $('header').append('<div class="sub_bg"></div>').css({
            transition: 0.3 + 's'
        })
    })
    $('.gnb .top_menu').mouseleave(function () {
        $('.sub_bg').remove()
    })



    // header gnb mobile_ver
    $('.ham').on('click', function () {
        $('header nav').show(300);
        $('.close').show(300);
        $('.open').hide(300);
    })
    $('.close').on('click', function () {
        $('header nav').hide()
        $('.close').hide()
        $('.open').show()
    })


    // .sub 서브메뉴 슬라이드 다운
    let viewWidth = $('#wrap').width()

    $(window).on('resize', function () {
        viewWidth = $('#wrap').width()
    })

    if (viewWidth < 1024 + 'px') {
        mobileNav()
    }

    function mobileNav() {
        $('.gnb .top_menu').click(function () {
            $(this).addClass('on')
            $('.top_menu.on .sub').stop().slideDown('slow')
        })
        $('.top_menu.on').click(function () {
            // $(this).removeClass('on').children('.sub').stop().slideUp('fast')
            $(this).children('.sub').stop().slideUp()
        })
    }




    //상단 슬라이드
    let slideW = $('.slide li').width()

    $(window).on('resize', function () {
        slideW = $('.slide li').width()
        console.log(slideW)
    })

    setInterval(function () {
        nextAni()
    }, 3000)

    function nextAni() {
        $('.slide').animate({
            marginLeft: -slideW
        }, 600, function () {
            $('.slide li').eq(0).appendTo('.slide')
            $('.slide').css({
                marginLeft: 0
            })
        })
    }



    // tab 버튼 무력화
    $('.tab>li>a').click(function (e) {
        e.preventDefault()
    })

    //.sec2 tab버튼 활성
    $('.sec2 .tab li').click(function () {
        console.log($(this).index())
        $('.sec2 .tab li').removeClass('on')
        $(this).addClass('on')
        let tabIndex = $(this).index()
        $('.exhibi_list').removeClass('on')
        $('.exhibi_list').eq(tabIndex).addClass('on')
    })

    //.sec5 tab버튼 활성
    $('.sec5 .tab li').click(function () {
        console.log($(this).index())
        $('.sec5 .tab li').removeClass('on')
        $(this).addClass('on')
        let tabIndex = $(this).index()
        $('.board_list').removeClass('on')
        $('.board_list').eq(tabIndex).addClass('on')
    })

})