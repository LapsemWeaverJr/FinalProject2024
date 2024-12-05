const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daysShort = ['su', 'mn', 'tu', 'wd', 'th', 'fr', 'sa'];
const emailVerifyRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const inputAddresses = ['input_breakfast', 'input_snack1', 'input_lunch', 'input_snack2', 'input_dinner'];

function clearForm() {
	document.getElementById('input_name').value = '';
	document.getElementById('input_email').value = '';
	document.getElementById('input_goal').value = '';
	
	document.getElementById('input_breakfast').value = '';
	document.getElementById('input_snack1').value = '';
	document.getElementById('input_lunch').value = '';
	document.getElementById('input_snack2').value = '';
	document.getElementById('input_dinner').value = '';
}

/* This code was taken from https://parallelcodes.com/javascript-create-and-download-text-file/. */
function downloadData() {
	if (emailVerifier()) {
		var data = makeWindow(false);
		var c = document.createElement("a");
		c.download = "user-text.txt";

		var t = new Blob([data], {
			type: "text/plain"
			});
		c.href = window.URL.createObjectURL(t);
		c.click();
	}
}

function makeWindow(downloadTrueOrFalse) {
	if (emailVerifier()) {
		pageData = '<html><head><title>Generated Page</title></head><body>';
		pageData += '<h1>Name: ' + document.getElementById('input_name').value + '</h1>';
		pageData += '<h2>Email: ' + document.getElementById('input_email').value + '</h2>';
		pageData += '<p><b>This week\'s goal:</b> \"' + document.getElementById('input_goal').value + '\"</p><hr>';
		pageData += '<table><tr><th></th><th>Breakfast</th><th>Snack #1</th><th>Lunch</th><th>Snack #2</th><th>Dinner</th></tr>'
		for (let i = 0; i < 7; i++) {
			pageData += '<tr><th>' + days[i] + '</th>';
			for (let j = 0; j < 5; j++) {
				pageData += '<td>' + document.getElementById(inputAddresses[j]).value + '</td>';
			}
			pageData += '</tr>';
		}
		pageData += '</table></body></html>';

		if (downloadTrueOrFalse) {
			flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
			flyWindow.document.write(pageData);
		} else {
			return pageData;
		}
	}
}

function emailVerifier() {
	const emailSample = document.getElementById('input_email').value;
	const result = emailSample.match(emailVerifyRegex);
	console.log(emailSample);
	console.log(result);
	if (result) {
		return true;
	} else {
		alert('Invalid email address.');
		return false;
	}
}
