$('.input__row--pass button').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
      $(this).closest('.input__row--pass').find('input').attr('type', 'password')
    }else{
      $(this).addClass('active')
      $(this).closest('.input__row--pass').find('input').attr('type', 'text')
    }
  })