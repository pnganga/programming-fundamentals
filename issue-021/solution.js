// implement your solution here
function oldAndYoung(students) {
	var obj = {};
	var oldest = students[0];
	var youngest = students[0];
	students.forEach(function (student) {
		if (student.yearOfBirth < oldest.yearOfBirth) {
			oldest = student;
		}else if (student.yearOfBirth > youngest.yearOfBirth) {
			youngest = student;
		}
	})	
	obj = {"youngest": youngest.name, "oldest": oldest.name};
	return obj;
}