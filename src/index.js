const comp = (a, b) => a.length > b.length ? 1 : (a.length < b.length ? -1 : 0);

const acs = (a, b) => {
	const m = a.length;
	const n = b.length;

	const T = Array.from({ length: m }, () =>
		Array.from({ length: n }, () => 0)
	);

	let res = [];
	let l = 0;

	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			if (a[i] == b[j]) {
				if (i == 0 || j == 0) {
					T[i][j] = 1;
				} else {
					T[i][j] = T[i - 1][j - 1] + 1;
				}
				l = T[i][j];
				var s = a.substring(i - l + 1, i + 1);
				var ind = res.findIndex((e) => s.startsWith(e));
				if (ind == -1) {
					res.push(s);
				} else {
					res[ind] = s;
				}
			}
		}
	}
	return res;
};

// const lcs2 = (a, b) => {
// 	const m = a.length;
// 	const n = b.length;

// 	const T = Array.from({ length: m }, () =>
// 		Array.from({ length: n }, () => 0)
// 	);

// 	let res = "";
// 	let l = 0;

// 	for (var i = 0; i < m; i++) {
// 		for (var j = 0; j < n; j++) {
// 			if (a[i] == b[j]) {
// 				if (i == 0 || j == 0) {
// 					T[i][j] = 1;
// 				} else {
// 					T[i][j] = T[i - 1][j - 1] + 1;
// 				}

// 				if (T[i][j] > l) {
// 					l = T[i][j];
// 					res = a.substring(i - l + 1, i + 1);
// 				}
// 				else if (T[i][j] == l) {
// 					res = a.substring(i - l + 1, i + 1);
// 				}
// 			}
// 		}
// 	}
// 	return res;
// };

const lcsN = (words) => {
	let i = 2;
	let s = acs(words[0], words[1]);
	while (i < words.length && s.length > 0) {
		let c = [];
		for (var j = 0; j < s.length; j++) {
			acs(s[j], words[i]).forEach((w) => {
				if (c.indexOf(w) === -1) {
					c.push(w);
				}
			})
		}
		s = c;
		i++;
	}
	var res = s.sort(comp)[s.length - 1];
	if (!!res) { console.log(res) } else { console.log(); }
}

const raw = process.argv.slice(2).sort(comp);
const words = [];
raw.forEach((word) => {
	if (words.indexOf(word) == -1) {
		words.push(word);
	}
})

switch (words.length) {
	case 0: console.log(); break;
	case 1: console.log(words[0]); break;
	default:
		// var flag = words.every((word) => word == words[0]);
		// if (flag) {
		// 	console.log(words[0]);
		// } else {
			lcsN(words);
		// }
		break;
}