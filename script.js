'use strict';

const password = document.getElementById('password');
const passwordValidate = document.getElementById('password-validate');

passwordValidate.addEventListener('focusout', () => {
	if (passwordValidate.value === password.value) {
		console.log(`Passwords match!`);
		password.classList.remove('error');
		password.parentNode.querySelector('span.error').innerHTML = '';
		passwordValidate.classList.remove('error');
	} else {
		console.log(`Passwords don't match!`);
		password.classList.add('error');
		password.parentNode.querySelector('span.error').innerHTML = '* Passwords do not match';
		passwordValidate.classList.add('error');
	}
});
