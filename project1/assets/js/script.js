$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/

var angle = Math.round(360 / 22);
var rotation = 0;

$('.next').click(nextCard);
$('.prev').click(prevCard);
setCards();

function setCards() {
  $('.card').each( function ( index ) {
    $(this).css({
      'transform': 'rotateY('+ (index * angle + rotation) +'deg) translateZ(1320px)' //changes users view of circle
    });
  });
}

function nextCard() {
  rotation -= angle;
  var active = $('.active');
  
  $('.active').removeClass('active');
  if(active.next().length === 0){
    $('.card').first().addClass('active');
  } else {
    active.next().addClass('active');
  }
  setCards();
}

function prevCard() {
  rotation += angle;
  
  var active = $('.active');
  
  $('.active').removeClass('active');
  if(active.prev().length === 0){
    $('.card').last().addClass('active');
  } else {
    active.prev().addClass('active');
  }
  
  
  setCards();
}

$('.card').click(function(){
  $
})


