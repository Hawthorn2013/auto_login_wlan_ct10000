function display_account_info() {
	var UserName = document.getElementById('UserName');
	chrome.storage.sync.get("username",function(object){
		UserName.value = object['username'];
		});
}
window.onload = display_account_info;