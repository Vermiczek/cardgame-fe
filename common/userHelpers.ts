export const calculatePasswordStrength = (password: string) => {
	// Initialize the strength to 0
	let strength = 0;

	// If the password is longer than 8 characters, increase the strength
	if (password?.length > 8) {
		strength += 1;
	}

	// If the password contains a mix of uppercase and lowercase letters, increase the strength
	if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
		strength += 1;
	}

	// If the password contains at least one numeric character, increase the strength
	if (/\d/.test(password)) {
		strength += 1;
	}

	// If the password contains at least one special character, increase the strength
	if (/[^A-Za-z0-9]/.test(password)) {
		strength += 1;
	}

	// Return the strength
	return strength;
};
