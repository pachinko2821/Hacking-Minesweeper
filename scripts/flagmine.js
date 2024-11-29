// flag all mines
function flagAllMines() {
	Java.perform(() => {
		Java.choose("minesweeper.Button.Mines.structure.Model", {
			onMatch: (model) => {
				console.log("[!] Found: " + model);
				let width = model.getFieldWidth();
				let height = model.getFieldHeight();
				console.log(`Width: ${width}, Height: ${height}`);
				let field = model.field.value;
				field.forEach(row => {
					let newrow = row.map(cell => {
						// flag the cell if it is a mine
						if (cell.mine.value) {
							cell.setFlagged(true);
						}
						// convert bool to int for cleaner map
						return cell.mine.value ? 1 : 0;
					});
					// print mine field
					console.log(newrow);
				});
			},
			onComplete: () => {
				console.log("[*] Done");
			}
		});
	});
}