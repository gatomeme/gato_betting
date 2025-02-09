function randomChar(): string {
	const chars = 'abcdefghijklmnopqrstuvwxyz';
	return chars.charAt(Math.floor(Math.random() * chars.length));
}

function encrypt(num: number): string {
	let [integerPart, decimalPart] = num.toString().split('.');

	// Convert integer part to binary and then to a complex string
	const integerBinary = parseInt(integerPart).toString(2);
	let complexString = integerBinary
		.split('')
		.map((char) => (char === '1' ? 'I' + randomChar() : 'O' + randomChar()))
		.join('');

	complexString += 'D'; // Delimiter for decimal part

	if (decimalPart) {
		// Encode each decimal digit directly as characters
		for (let i = 0; i < decimalPart.length; i++) {
			complexString += (parseInt(decimalPart[i]) + 10).toString(36); // Offset by 10 to convert to a letter
		}
	}

	// Add random characters to the end for extra obfuscation
	for (let i = 0; i < 5; i++) {
		complexString += randomChar();
	}

	return complexString;
}

function decrypt(complexStr: string): number {
	// Remove the last 5 random characters
	complexStr = complexStr.slice(0, -5);

	// Split at the main delimiter 'D'
	const [integerComplex, decimalComplex] = complexStr.split('D');
	let integerBinary = '';
	for (let i = 0; i < integerComplex.length; i += 2) {
		integerBinary += integerComplex[i] === 'I' ? '1' : '0';
	}

	const integerPart = parseInt(integerBinary, 2);
	let decimalPart = '';

	if (decimalComplex) {
		// Decode each character back to decimal digits
		for (let char of decimalComplex) {
			decimalPart += (parseInt(char, 36) - 10).toString();
		}
	}

	return parseFloat(`${integerPart}.${decimalPart}`);
}

export { encrypt, decrypt };
