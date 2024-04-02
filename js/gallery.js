var $galleryContainer = $('.people-gallery').isotope({
    itemSelector: '.clients',
      layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value 
    })
})