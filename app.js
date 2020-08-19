const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeat');
const form = document.querySelector('#form');

// Show input error
function showError(input, message) {
	input.parentElement.className = 'form-control error';
	input.nextElementSibling.innerHTML = message;
}

// Show success
function showSuccess(input) {
	input.parentElement.className = 'form-control success';
}

// Events
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Username
	if (username.value.length < 3) {
		showError(username, 'Username requires more than 3 characters');
	} else {
		showSuccess(username);
	}

	// Email
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		showSuccess(email);
	} else {
		showError(email, 'Invalid email');
	}

	// Password
	if (password.value.length < 6) {
		showError(password, 'Password requires more than 6 characters');
	} else {
		showSuccess(password);
	}

	// Repeat px
	if (repeatPassword.value !== password.value || repeatPassword.value === '') {
		showError(repeatPassword, 'Passwords do not match');
	} else {
		showSuccess(repeatPassword);
	}
});
