$(function(){
  
  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      console.log('on BeforeLoad');
    },
    onComplete: function(){
      console.log('on complete');
      init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      console.log(percentage);
    }
  });

  var now = 1;

  function init(){
    TweenMax.to($('#loading'), 0.5, {autoAlpha: 0});
    $('.item[data-id="' + now + '"]').addClass('open');

    $('.item').on('click', function(e){
      var id = $(this).data('id');
      if(id == now) return
      // console.log(now);
      $('.item[data-id="' + now + '"]').removeClass('open');
      now = id;
      // console.log(id);
      $('.item[data-id="' + id + '"]').addClass('open');
    });

    $('.item a').on('click', function(e){
      e.preventdefault();
    });
  }

});