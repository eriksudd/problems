let FirstReverse = (string) => {
	return string.split('').reverse().join('');
}



/*
Using the JavaScript language, have the function FirstFactorial(num) take the num 
parameter being passed and return the factorial of it (e.g. if num = 4, return 
(4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the 
input will always be an integer. 

Sample Test Cases
Input:4
Output:24

Input:8
Output:40320
*/

let FirstFactorial = (num) => {
	if (num === 0) {
		return 1;
	} else {
		return num * FirstFactorial(num - 1);
	}
}


/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) 
and finally return this modified string.

Sample Test Cases:
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"

*/


let LetterChanges = (str) => {
	// write solution here
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

/*
Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 
1 to num. For example: if the input is 4 then your program should return 10 because 
1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 

Sample Test Cases:
Input:12
Output:78

Input:140
Output:9870
*/

let SimpleAdding = (num) => {
	// write solution here
	return [...Array(num).keys(), num].reduce((p, c) => p + c);
}

/*
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter 
being passed and capitalize the first letter of each word. Words will be separated by only one 
space. 

Sample Test Cases
Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"
*/

let LetterCapitalize = (str) => {
	// write solution here
}

/*
Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter 
being passed and determine if it is an acceptable sequence by either returning the string true 
or false. The str parameter will be composed of + and = symbols with several letters between 
them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + 
symbol. So the string to the left would be false. The string will not be empty and will have 
at least one letter. 

Sample Test Cases
Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"
*/

let SimpleSymbols = (str) => {
	// write solution here
}


// do not modify below
export default { 
	FirstReverse, 
	LetterChanges, 
	SimpleAdding,
	FirstFactorial,
	LetterCapitalize,
	SimpleSymbols 
};