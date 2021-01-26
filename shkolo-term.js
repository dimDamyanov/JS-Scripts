function termGrade(grades) {
	var sum = (accumulator, current_value) => accumulator + current_value;
	return (grades.reduce(sum) / grades.length).toFixed();
}

var tableRows = document.getElementsByClassName("compactTableRow ");
for (var tableRow of tableRows) {
	var grades = [];
	var termGradeCell = tableRow.getElementsByClassName("numVal firstTerm ")[0];
	var gradeButtons = tableRow.getElementsByClassName("firstTerm solid-left-border ")[0].getElementsByClassName("btn small grade ");
	if (gradeButtons.length) {
		if (!termGradeCell.childNodes.length) {
			for (var gradeButton of gradeButtons) {
				grades.push(parseInt(gradeButton.textContent));		
			}
			var termGradeValue = termGrade(grades);
			var termGradeButton = document.createElement("button");
			var termGradeNode = document.createTextNode(termGradeValue);
			termGradeButton.appendChild(termGradeNode);
			termGradeButton.classList.add("btn", "small", "width-100", "grade", "gradeTermFinal", "grade-button");
			switch(termGradeValue) {
				case "6":
					termGradeButton.classList.add("green-jungle");
					break;
				case "5":
					termGradeButton.classList.add("blue");
					break;
				default:
					termGradeButton.classList.add("red");
					break;
				
			}
			termGradeCell.appendChild(termGradeButton);
		}
	}
	else {
		termGradeCell.textContent = "-";
	}
}
