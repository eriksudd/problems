let FirstReverseSolution = (str) => {
	return str.split('').reverse().join('');
}

let FirstFactorialSolution = (num) => {
	if (num === 0) {
		return 1;
	} else {
		return num * FirstFactorialSolution(num - 1);
	}
}

let LetterChangesSolution = (str) => { 
    return str.toLowerCase().split('')
    .map(letter => {
        if (letter.match(/[a-y]/)) {
            return String.fromCharCode(letter.charCodeAt(0) + 1);
        } else if (letter === 'z') {
            return 'a';
        } else {
            return letter;
        }
    })
    .map(letter => letter.match(/[aeiou]/) ? letter.toUpperCase() : letter)
    .join('')
}


let SimpleAddingSolution = (num) => { 
    return [...Array(num).keys(), num].reduce((p, c) => p + c);
}

let LetterCapitalizeSolution = (str) => {
	return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

let SimpleSymbolsSolution = (str) => {
	for (var i = 0; i < str.length; i++) {
	    if (str[i].match(/[a-z]/gi) && (str[i-1] !== '+' || str[i+1] !== '+')) {
	        return false;
	    }
	}
	return true;
}



// export statements
export default { 
	FirstReverseSolution,
	FirstFactorialSolution, 
	LetterChangesSolution,
	SimpleAddingSolution,
	LetterCapitalizeSolution,
	SimpleSymbolsSolution
}