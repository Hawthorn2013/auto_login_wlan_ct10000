function fill_in_account_info() {
	chrome.runtime.sendMessage(
		'username', function(response) {
			frames["mainFrame"].document.getElementById("UserName1").value = response;
	});
	chrome.runtime.sendMessage(
		'password', function(response) {
			frames["mainFrame"].document.getElementById("PassWord1").value = response;
	});
	frames["mainFrame"].document.getElementById("loginbutton1").click();
}
window.onload = fill_in_account_info;