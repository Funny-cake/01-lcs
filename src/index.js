let p = (a, b) => a.length - b.length;
let f = (a) => (i) => {
	if (a.indexOf(i) == -1) {
		a.push(i);
	}
};
let a = (k, m) => Array.from({length: k}, m);
let l = (x) => console.log(x);
let W = [];

process.argv.slice(2).sort(p).forEach(f(W));

if(W.length == 0) {
	l("");
} else if(W.length == 1) {
	l(W[0]);
} else {
	let S = [W[0]];
	W.forEach((w) => {
		let C = [];
		S.forEach((s) => {
			let T = a(w.length, () => a(s.length, () => 0));
			[...w].forEach((u, i) => {
				[...s].forEach((y, j) => {
					if (u == y) {
						T[i][j] = 1 + ((i == 0 || j == 0) ? 0 : T[i - 1][j - 1]);
						f(C)(w.substring(i - T[i][j] + 1, i + 1));
					}
				});
			});
		}); 
		S = C;
	});
	l(S.sort(p).slice(-1)[0] ?? "");
}