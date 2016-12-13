import expect from 'expect';
import Easy from '../CoderByte/Easy';
import CoderByteSolutions from '../solutions/CoderByte.solutions';

/*************************** EASY  *********************************/
const { 
	FirstReverse,
	FirstFactorial, 
	LetterChanges,
	SimpleAdding,
	LetterCapitalize,
	SimpleSymbols 
} = Easy;
const { 
	FirstReverseSolution, 
	FirstFactorialSolution,
	LetterChangesSolution,
	SimpleAddingSolution,
	LetterCapitalizeSolution,
	SimpleSymbolsSolution
} = CoderByteSolutions;

describe('FirstReverse', () => {

	let testCases = ['Erik', 'I Love Coding', 'h33llLo', 'Yo0', 'lettersz!23z', '323042'];
	
	testCases.forEach(testCase => {
		it(`should return the reverse of the input string`, () => {
			expect(FirstReverse(testCase)).toBe(FirstReverseSolution(testCase));  
		});	
	})
	
})

describe('FirstFactorial', () => {

	let testCases = [1, 23, 22, 11, 55];
	
	testCases.forEach(testCase => {
		it(`should return the factorial of the input number`, () => {
			expect(FirstFactorial(testCase)).toBe(FirstFactorialSolution(testCase));  
		});	
	})
	
})


describe('LetterChanges', () => {

	let testCases = ['hello world', 'replace!', '12342365125', 'this long cake$@', 'a b c dee'];
	
	testCases.forEach(testCase => {
		it(`should replace each letter with the one following it and capitalize vowels`, () => {
			expect(LetterChanges(testCase)).toBe(LetterChangesSolution(testCase));  
		});	
	})
	
})

describe('SimpleAdding', () => {

	let testCases = [1, 23, 22, 11, 55];
	
	testCases.forEach(testCase => {
		it(`should add up all the numbers from 1 to number`, () => {
			expect(SimpleAdding(testCase)).toBe(SimpleAddingSolution(testCase));  
		});	
	})
	
})

describe('LetterCapitalize', () => {

	let testCases = ['hunter s thompson', 'waLLyz World', 'left handed cow', 'TOO LOUD', 'so soft'];
	
	testCases.forEach(testCase => {
		it(`should capitalize only the first letter of each word`, () => {
			expect(LetterCapitalize(testCase)).toBe(LetterCapitalizeSolution(testCase));  
		});	
	})
	
})

describe('SimpleSymbols', () => {

	let testCases = ['d+d', '+d===+a+', 'aaaa', '+z+z+z', '+a='];
	
	testCases.forEach(testCase => {
		it(`should capitalize only the first letter of each word`, () => {
			expect(SimpleSymbols(testCase)).toBe(SimpleSymbolsSolution(testCase));  
		});	
	})
	
})



/*************************** MEDIUM *********************************/
