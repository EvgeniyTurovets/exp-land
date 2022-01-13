$(document).ready(function(){

	$('.input__row--pass button').on('click', function(){
		if($(this).hasClass('active')){
		$(this).removeClass('active')
		$(this).closest('.input__row--pass').find('input').attr('type', 'password')
		}else{
		$(this).addClass('active')
		$(this).closest('.input__row--pass').find('input').attr('type', 'text')
		}
	})

	$('.pincode .pincode__input').keydown(function(e){
		$(this).val('');
	});
	
	$('.pincode .pincode__input').keyup(function(e){
		var $wrap = $(this).closest('.pincode');
		var $inputs = $wrap.find('.pincode__input');	
		var val = $(this).val();
		
		// Ввод только цифр
		if(val == val.replace(/[0-9]/, '')) {
			$(this).val('');
			return false;
		}
		
		// Передача фокуса следующему innput
		$inputs.eq($inputs.index(this) + 1).focus();
	
		// Заполнение input hidden
		var fullval = '';
		$inputs.each(function(){
			fullval = fullval + (parseInt($(this).val()) || '0');
		});
		console.log(fullval)
		$wrap.find('.hidden-input').val(fullval);
	});

	$('.js-selectize').selectize();
});