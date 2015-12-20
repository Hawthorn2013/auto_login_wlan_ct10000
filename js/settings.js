//管理设置
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	switch (message.msg) {
	case 'msg_set_cycle_login_flag':
		chrome.storage.sync.set({'cycle_login_flag': message.data});
		return true;	//必须返回true，否则消息返回将不可用
		break;
	case 'msg_get_cycle_login_flag':
		chrome.storage.sync.get('cycle_login_flag', function(obj) {
			data = obj['cycle_login_flag'];
			sendResponse({data});
		});
		return true;
		break;
	case 'msg_set_login_cycle':
		chrome.storage.sync.set({'login_cycle': message.data});
		return true;
		break;
	case 'msg_get_login_cycle':
		chrome.storage.sync.get('login_cycle', function(obj) {
			sendResponse({data: obj['login_cycle']});
		});
		return true;
		break;
	case 'msg_set_username':
		chrome.storage.sync.set({'username': message.username});
		return true;
		break;
	case 'msg_get_username':
		chrome.storage.sync.get('username', function(obj) {
			sendResponse({data: obj['username']});
		});
		return true;
		break;
	case 'msg_set_password':
		chrome.storage.sync.set({'password': message.password});
		return true;
		break;
	case 'msg_get_password':
		chrome.storage.sync.get('password', function(obj) {
			sendResponse({data: obj['password']});
		});
		return true;
		break;
	}
});