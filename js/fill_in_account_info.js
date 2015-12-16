function fill_in_account_info() {
	frames["mainFrame"].document.getElementById("UserName1").value = "18100000000";
	frames["mainFrame"].document.getElementById("PassWord1").value = "888888";
	frames["mainFrame"].document.getElementById("loginbutton1").click();
}
window.onload = fill_in_account_info;