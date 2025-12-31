
export default class ransyr {

	static random() {
		return Math.random();
	}

	static sample(arr, k) {
		if (k > arr.length) {
			throw new RangeError("sample size larger than population");
		}

		const copy = [...arr];
		const result = [];

		for (let i = 0; i < k; i++) {
			const idx = Math.floor(Math.random() * copy.length);
			result.push(copy[idx]);
			copy.splice(idx, 1);
		}

		return result;
	}

	static randint(min, max) {
		if (min > max) [min,
			max] = [max,
			min];
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static choice(arr) {
		if (!arr.length) return undefined;
		return arr[Math.floor(Math.random() * arr.length)];
	}

	static shuffle(arr) {
		const copy = [...arr];
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copy[i],
				copy[j]] = [copy[j],
				copy[i]];
		}
		return copy;
	}

	static chance(percent) {
		return Math.random() * 100 < percent;
	}
}

