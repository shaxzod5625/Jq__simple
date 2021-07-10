
$('.ask').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('active').next().slideToggle(400)

    $('.ask').not($(this)).removeClass('active')

    $('.answer').not($(this).next()).slideUp(500)


})

$('button[data-filter]').on('click',function () {
    let attr = $(this).attr('data-filter');
    if (attr === 'all') {
        $('div[data-filter]').stop().slideDown(500);
    }else{
        $('div[data-filter]').stop().slideUp(500);
    }

    $(`div[data-filter=${attr}]`).stop().slideDown(500);
})

function typing(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(function () {
        fullText += inner[letterCount];
        element.html(fullText)
        letterCount++;
        if (fullText == inner) {
            clearInterval(interval)
        }
    

    },150)
}

typing($('h1'))

$('.read-more').on('click', function () {
    $('.text-hidden').toggleClass('hidden')
    if ($.trim($('.read-more').html()) == 'Read More') {
        $('.read-more').html('Hide');
    } else {
        $('.read-more').html('Read More');
    }
})

$('.js-modal-show').click(function (e) {
    e.preventDefault();
    $('.modal').fadeIn(500);
})

$('.modal .close').click(function (e) {
    e.preventDefault();
    $('.modal').fadeOut(500);
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex: 10
})

$(window).on('scroll', function () {
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop();
    if (editPosition > 0) {
        $('.nav').css({
            top: editPosition + 'px'
        })
    } else {
        $('.nav').css({
            top: 0
        })
    }
})

$(window).on('scroll', function () {
    let btnTop = $(window).scrollTop() - 100
    if (btnTop >= 0) {
        $('.js-btn-top').css({
            bottom: 0
        })
    } else {
        $('.js-btn-top').css({
            bottom: -100 + '%'
        })
    }
})
$('.js-btn-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
});
