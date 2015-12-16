function fill_in_account_info() {
	var UserName = frames["mainFrame"].document.getElementById("UserName1");
	var Password = frames["mainFrame"].document.getElementById("PassWord1");
	chrome.storage.sync.get("username",function(object){
		UserName.value = object['username'];
		chrome.storage.sync.get("password",function(object){
			Password.value = object['password'];
			frames["mainFrame"].document.getElementById("loginbutton1").click();
		});
	});
}
window.onload = fill_in_account_info;