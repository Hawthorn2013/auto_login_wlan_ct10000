function display_account_info() {
	UserName = document.getElementById('UserName');
	EnableCycleLogin = document.getElementById('EnableCycleLogin');
	LoginCycle = document.getElementById('LoginCycle');
	chrome.storage.sync.get("username",function(object){
		UserName.value = object['username'];
	});
	chrome.runtime.sendMessage({msg: 'msg_get_cycle_login_flag', data: EnableCycleLogin.checked}, function(res) {
		EnableCycleLogin.checked = res.data;
	});
	chrome.runtime.sendMessage({msg: 'msg_get_login_cycle', data: LoginCycle.value}, function(res) {
		LoginCycle.value = res.data;
	});
}
window.onload = display_account_info;
document.getElementById('Login').onclick = function() {
	chrome.tabs.create({url: "http://www.baidu.com/"}, function(){});
};
document.getElementById('EnableCycleLogin').onclick = function() {
//	chrome.runtime.sendMessage({EnableCycleLogin.checked, LoginCycle});
	chrome.runtime.sendMessage({msg: 'msg_set_cycle_login_flag', data: EnableCycleLogin.checked});
};
document.getElementById('LoginCycle').onchange = function() {
	if (!isNaN(parseInt(LoginCycle))) {
		LoginCycle.value = 10;
	}
	chrome.runtime.sendMessage({msg: 'msg_set_login_cycle', data: LoginCycle.value});
};