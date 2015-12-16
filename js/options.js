function display_settings() {
	username = "";
	chrome.storage.sync.get("username",function(object){
		username = object['username'];
	});
	password = "";
	chrome.storage.sync.get("password",function(object){
		password = object['password'];
	});
	var testname = username;
	alert('读取成功！');	//重要！去掉会导致配置文本框更新失败！
	document.getElementById('UserName').value = username;
	document.getElementById('Password').value = password;
	document.getElementById('Save').onclick = function() {
		chrome.storage.sync.set({'username':document.getElementById('UserName').value}, function(){});
		chrome.storage.sync.set({'password':document.getElementById('Password').value}, function(){});
		alert('保存成功！');
	}
}
window.onload = display_settings;