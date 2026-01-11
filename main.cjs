

module.export = class randx {
	
	static Rest;
	
	static randomseed(seed) {
		let m = 0x80000000;
		let a = 1103515245;
		let c = 12345;
		let state = seed ? seed : Math.floor(Math.random() * (m-1));
		state = (a * state + c) % m;
		randx.Rest = state / (m - 1);
	}

	static random() {
		return randx.Rest ? randx.Rest : Math.random();
	}

	static sample(arr, k) {
		if (k > arr.length) {
			throw new RangeError("insufficient array length");
		}

		const copy = [...arr];
		const result = [];

		for (let i = 0; i < k; i++) {
			const idx = Math.floor(randx.random() * copy.length);
			result.push(copy[idx]);
			copy.splice(idx, 1);
		}

		return result;
	}

	static randint(min, max) {
		if (min > max) [min,
			max] = [max,
			min];
		return Math.floor(randx.random() * (max - min + 1)) + min;
	}

	static choice(arr) {
		if (!arr.length) return undefined;
		return arr[Math.floor(randx.random() * arr.length)];
	}

	static shuffle(arr) {
		const copy = [...arr];
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(randx.random() * (i + 1));
			[copy[i],
				copy[j]] = [copy[j],
				copy[i]];
		}
		return copy;
	}

	static chance(percent) {
		return randx.random() * 100 < percent;
	}
}