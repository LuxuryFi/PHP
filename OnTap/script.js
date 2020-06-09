$(document).ready(function(){
	$('form').submit(function(){
		var name = $('#name').val();
		var age = $('#age').val();
		var email = $('#email').val();

		if ($('#female').prop('checked')){
			console.log($('#female').val());
		}
		else if ($('#male').prop('checked')){
			console.log($('#male').val());
		}
		else {
			console.log($('#course').val());
		}
		
		var check_gender = 0;

		if ($('#male').prop('checked') ){
			var gender = $('male').val();
		}
		else if ($('#female').prop('checked')){
			var gender = $('female').val();
		}
		else {
			check_gender++;
		}

		var course = $('#course').val();
		
		var dev = $('#dev').val();
		var tester = $('#tester').val();

		var password = $('#password').val();
		var password_2 = $('#password_2').val();

		var note = $('#note').val();
		
		var error = '';

		var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


		// /^[a-zA-Z0-9_-]{1,}@{[a-zA-Z0-9_]{1,}(\.){0,}}([a-zA-Z0-9\.])$/;


		if(!name){
			$('#name').focus();
			error += 'Không để trống Name';
		} 
		else if (!age || isNaN(age)){
			error += 'Không để trống hoặc phải nhập số';
			$('#age').focus();
		} else if (!regex.test(email)){
			error += 'Không để trống email hoặc email không đúng định dạng';
			$('#email').focus();
		} else if (check_gender > 0){
			error += 'Phải chọn giới tính';
			$('#male').focus();
		} else if (course == 'none'){
			error += 'Phải chọn khóa học';
			$('#course').focus();
		} else if (!password){
			error += 'Không để trống password';
			$('#password').focus();
		}
		else if (password != password_2){
			error += 'Password phải trùng nhau';
		}
		else {
			error += 'submit thành công';
		}

		$('#error').html(error);
		event.preventDefault();
	});
});