// Change grid size
function setGrid(x, y) {
	Java.perform(() => {
		let Model = Java.use("minesweeper.Button.Mines.structure.Model");
		let Cell = Java.use("minesweeper.Button.Mines.structure.Model$Cell");
		Model.createField.implementation = (arg1, arg2, arg3) => {
			console.log("[+] Modifying createField")
			let model = Java.choose("minesweeper.Button.Mines.structure.Model", {
				onMatch: (instance) => {
					console.log("[+] Found: " + instance);
					instance.createField(x, y, arg3);
				},
				onComplete: () => {
					console.log("[+] Done!")
				}
			});
		}
	});
}