"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return [];
	} else if (d === 0) {
		let root = -b / (2 * a);
		return [root];
	} else if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		return [root1, root2];
	}

	return arr;
}