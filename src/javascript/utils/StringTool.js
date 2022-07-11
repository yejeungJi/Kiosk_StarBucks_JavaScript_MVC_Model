export const subComma = string =>
	+string
		.split('')
		.filter(string => string !== ',')
		.join('');

export const spacingString = string =>
	string
		.split('')
		.map(string => string.replace(/[A-Z]/, ' ' + string))
		.map((string, index) => (index ? string : string.toUpperCase()))
		.join('');
