/* Llamamos al método addEventListener() “escuchar al evento” sobre el elemento window */
window.addEventListener("load", iniciar, false);

/* Accedemos a los campos del formulario utilizando getElementById() */
function iniciar()
{
	nombre=document.getElementById("nombre");
	correo=document.getElementById("correo");

	nombre.addEventListener("input", validaNombre, false);
	correo.addEventListener("input", validaCorreo, false);
}

/* Validamos el campo nombre, utilizamos el método setCustomValidity que personaliza el mensaje de validación  */
function validaNombre()
{
	var nombres_usuarios = ["luis", "carmen", "elena", "antonio"];
	var i, encontrado = false;
	
	for (i = 0;i < nombres_usuarios.length && !encontrado;i++)
	{
		if (nombre.value == nombres_usuarios[i])
			encontrado = true;
	}
	
	if(!encontrado)
	{
		nombre.setCustomValidity('El usuario NO existe');
	}
	else
	{
		nombre.setCustomValidity('');
	}
}

/* Validamos el correo electrónico */
function validaCorreo()
{
	var dominio = correo.value.substr(correo.value.length-3, correo.value.length-1)
	if (correo.value.length < 4 || dominio != ".es")
	{
		correo.setCustomValidity('Introducir una dirección de correo acabada en .es');
	}
	else
	{
		correo.setCustomValidity('');
	}
}