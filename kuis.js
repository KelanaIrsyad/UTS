function check() {
	var c=0;
	var q1 = document.kuis.jawaban1.value;
	var q2 = document.kuis.jawaban2.value;
	var q3 = document.kuis.jawaban3.value;
	var q4 = document.kuis.jawaban4.value;
	var q5 = document.kuis.jawaban5.value;

	if (q1 == "mata") {c+=20}
	if (q2 == "Masker") {c+=20}
	if (q3 == "mandiri") {c+=20}
	if (q4 == "sabun") {c+=20}
	if (q5 == "1m") {c+=20}

		document.write("Skor anda: " + c);
}