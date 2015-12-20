function display_settings() {
	var UserName = document.getElementById('UserName');
	var Password = document.getElementById('Password');
	document.getElementById('Save').onclick = function() {
		chrome.runtime.sendMessage({msg: 'msg_set_username', data: UserName.value});
		chrome.runtime.sendMessage({msg: 'msg_set_password', data: Password.value});
		alert('保存成功！');
	}
	chrome.runtime.sendMessage({msg: 'msg_get_username'}, function(res) {
		UserName.value = res.data;
	});
	chrome.runtime.sendMessage({msg: 'msg_get_password'}, function(res) {
		Password.value = res.data;
	});
}
window.onload = display_settings;