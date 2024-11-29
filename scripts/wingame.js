// win the game
function winGame() {
	Java.perform(() => {
		Java.choose("minesweeper.Button.Mines.structure.Model", {
			onMatch: (model) => {
				console.log("[!] Found: " + model);
				let width = model.getFieldWidth();
				let height = model.getFieldHeight();
				console.log(`Width: ${width}, Height: ${height}`);
				let field = model.field.value;
				Java.choose("minesweeper.Button.Mines.structure.MinesweeperPlay", {
					onMatch: (minesweeperplay) => {
						field.forEach(row => {
							let newrow = row.map(cell => {
							// flag the cell if it is a mine
								if (cell.mine.value) {
									// flag cell that is a mine
									cell.setFlagged(true);
								} else {
									// open cell that is not a mine
									minesweeperplay.openAllAround(cell);
								}
								// convert bool to int for cleaner map
								return cell.mine.value ? 1 : 0;
							});
					// print mine field
						console.log(newrow);
						});
					},
					onComplete: () => {
						setTimeout(()=>{}, 500);
					}
				});
			},
			onComplete: () => {
				console.log("[*] Done");
			}
		});
	});
}
