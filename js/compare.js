$( "#target" ).click(function() {
	const dmp = new diff_match_patch();

	const text1 = document.getElementById('crm').value;
	const text2 = document.getElementById('edo').value;

	const d = dmp.diff_main(text1, text2);
	const ds = dmp.diff_prettyHtml(d);
	document.getElementById('result-crm').innerHTML = ds;
});