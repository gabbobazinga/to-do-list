$( document ).ready(function(){
  $('.input-item').focus();

  $('#enter').click(function(){
    var inputUser = $('.input-item');
    if(inputUser.val().length > 0){
      addListItem(inputUser);
    }
  })

  $('.to-do-list').on('click','button', delListItem);

  $('.input-item').keyup(function(event){
    var inputUser = $('.input-item');
    if(event.which === 13 && inputUser.val().length > 0){
      addListItem(inputUser);
    }
  })

  $('.to-do-list > ul').on('click','li',function(){
    if(!$(this).hasClass('done')){
      $(this).addClass('done');
    } else {
      $(this).removeClass('done');
    }
  })
})
