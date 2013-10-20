jQuery(function(){
  

  var winH = $(window).height();
  var p1H = $('.page-first').height();
  //start page go to page-first
  $('.page-first, .page-two').css('height',winH);
  $('.page-first #names').css('padding-top',winH-p1H);

  $('.page-first').click(function(){
    var p1H = $('.page-first').height();
    $(document).scrollTop(p1H);
  });
  
  $(document).scrollTop(0);
  //styling for pagetwo
  //height of (.date.girl+.name+.date.boy)/2
  var p2topPad = ($('.page-two').height() - $('.page-two .container').height()+20)/2;
  $('.page-two .container').css('padding-top',p2topPad);
  
  $('.page-two .girl').hover(
    function(){
      $('.page-two .girl').toggleClass('bordered');
      $('.page-two .girl').toggleClass('red-crimson');
      
    },
    function(){
      $('.page-two .girl').toggleClass('bordered');
      $('.page-two .girl').toggleClass('red-crimson');
    });

    $('.page-two .boy').hover(
    function(){
      $('.page-two .boy').toggleClass('bordered blue-sea');
    },
    function(){
      $('.page-two .boy').toggleClass('bordered blue-sea');
    });
});


