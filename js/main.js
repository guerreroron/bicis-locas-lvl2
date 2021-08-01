function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();
	const lastname = $('#lastname').val().trim();
	const email = $('#input-email').val().trim();
	const password = $('#input-password').val().trim();
	const bike = $('select').val().trim();
	
	/* Ahora pruebo 1 a 1 los valores */
	if (name.match(/^[A-Z][a-z]{1,}/) == null){
		$('#name').parent().append('<span>El nombre debe contener al menos dos letras y la primera mayúscula</span>');
	}
	else {
		$('#name').siblings().remove();
	}

	if (lastname.match(/^[A-Z][a-z]{1,}/) == null){
		$('#lastname').parent().append('<span>El apellido debe contener al menos dos letras y la primera mayúscula</span>');
	}
	else {
		$('#lastname').siblings().remove();
	}

	if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i) == null){
		$('#input-email').parent().append('<span>El email debe ser de formato user@domain.tld</span>');
	}
	else {
		$('#input-email').siblings().remove();
	}

	if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/) == null){
		$('#input-password').parent().append('<span>El password debe contener al menos 6 caracteres, al menos una mayúscula, un número y no puede ser "password" o "123456" o "098754"</span>');
	}
	else {
		$('#input-password').siblings().remove();
	}

	if (bike == 0){
		$('select').parent().append('<span>Debe seleccionar un tipo de bicicleta</span>');
	}
	else {
		$('select').siblings().remove();
	}
}
