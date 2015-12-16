function display_settings() {
	var UserName = document.getElementById('UserName');
	var Password = document.getElementById('Password');
	chrome.storage.sync.get("username",function(object){
		UserName.value = object['username'];
		});
	chrome.storage.sync.get("password",function(object){
		Password.value = object['password'];
	});
	document.getElementById('Save').onclick = function() {
		chrome.storage.sync.set({'username':document.getElementById('UserName').value}, function(){});
		chrome.storage.sync.set({'password':document.getElementById('Password').value}, function(){});
		alert('保存成功！');
	}
}
window.onload = display_settings;