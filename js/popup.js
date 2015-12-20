function display_account_info() {
	var UserName = document.getElementById('UserName');
	var EnableCycleLogin = document.getElementById('EnableCycleLogin');
	var LoginCycle = document.getElementById('LoginCycle');
	var Login = document.getElementById('Login');
	chrome.runtime.sendMessage({msg: 'msg_get_username'}, function(res) {
		UserName.value = res.data;
	});
	chrome.runtime.sendMessage({msg: 'msg_get_cycle_login_flag', data: EnableCycleLogin.checked}, function(res) {
		EnableCycleLogin.checked = res.data;
	});
	chrome.runtime.sendMessage({msg: 'msg_get_login_cycle', data: LoginCycle.value}, function(res) {
		LoginCycle.value = res.data;
	});
	Login.onclick = function() {
		chrome.tabs.create({url: "http://www.baidu.com/"}, function(){});
	};
	EnableCycleLogin.onclick = function() {
		chrome.runtime.sendMessage({msg: 'msg_set_cycle_login_flag', data: EnableCycleLogin.checked});
	};
	LoginCycle.onchange = function() {
		if (!isNaN(parseInt(LoginCycle))) {
			LoginCycle.value = 10;
		}
		chrome.runtime.sendMessage({msg: 'msg_set_login_cycle', data: LoginCycle.value});
	};
}
window.onload = display_account_info;
