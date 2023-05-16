type NumberParametersFunction = (...numbers: number[]) => number;

export const add: NumberParametersFunction = function (...numbers: number[]) {
	let sum = 0;

	for (const number of numbers) {
		sum += number;
	}

	return sum;
};

export const cacheWrapper = function (func: NumberParametersFunction): NumberParametersFunction {
	const cache: Record<string, number> = {};

	const wrappedFunction: NumberParametersFunction = (...numbers) => {
		const joinedNumbers = numbers.sort((a, b) => a - b).join(',');

		if (Object.hasOwn(cache, joinedNumbers)) {
			// The logging is applied for clearness
			console.log('Took from cache:');

			return cache[joinedNumbers];
		}

		const result = func(...numbers);
		cache[joinedNumbers] = result;

		return result;
	};

	return wrappedFunction;
};
