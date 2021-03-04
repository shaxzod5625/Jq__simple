
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