function avg(grades) {
    var summer = (accumulator, currentValue) => accumulator + currentValue;
    return (grades.reduce(summer) / grades.length).toFixed(2);
}

var tableRows = document.getElementsByClassName("compactTableRow ");
for (var tableRow of tableRows) {
	var grades = [];
	var termGradeCell = tableRow.getElementsByClassName("numVal firstTerm ")[0];
	var gradeButtons = tableRow.getElementsByClassName("firstTerm solid-left-border ")[0].getElementsByClassName("btn small grade ");
	if (gradeButtons.length) {
		for (var gradeButton of gradeButtons) {
			grades.push(parseInt(gradeButton.textContent));		
		}
		termGradeCell.textContent = avg(grades);
	}
	else {
		termGradeCell.textContent = "-";
	}
}
