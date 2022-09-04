function initTinymceJs() {
	tinymce.init({
		selector: "textarea#tinymce",
		plugins: "a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents",
		toolbar: "a11ycheck casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents",
		toolbar_mode: "floating",
	});
}
function getTinymceContentJs() {
	return tinymce.activeEditor.getContent();
}
