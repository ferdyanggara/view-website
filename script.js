// event pada saat link di click 
$('.page-scroll').on('click', function(e){

  // ambil is href
  var tujuan = $(this).attr('href');
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  },1250,'easeInOutExpo');

  e.preventDefault();


});

// parallax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/4+'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/4+'%)'
  });




});



