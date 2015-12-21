var cycle_login_flag = false;
var login_cycle = 10000;

function create_page_for_login() {
	chrome.tabs.create({url: "http://www.baidu.com/", active: false}, function(tab){
		setTimeout(function() {
			chrome.tabs.get(tab.id, function(tab) {
				if (tab.status == 'complete' && tab.url == 'https://www.baidu.com/') {
					chrome.tabs.remove(tab.id);
				}
			});
		}, 10000);
	});
}

chrome.alarms.onAlarm.addListener(function(alarm) {
	create_page_for_login();
});

chrome.storage.sync.get('cycle_login_flag', function(obj) {
	cycle_login_flag = obj['cycle_login_flag'];
	chrome.storage.sync.get('login_cycle', function(obj) {
		login_cycle = parseInt(obj['login_cycle']);
		if (cycle_login_flag) {
			chrome.alarms.create("cycle_login", {delayInMinutes: login_cycle, periodInMinutes: login_cycle});
		}
	});
});
		
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	switch (message.msg) {
	case 'msg_set_cycle_login_flag':
		cycle_login_flag = message.data;
		if (cycle_login_flag) {
			chrome.alarms.create("cycle_login", {delayInMinutes: login_cycle, periodInMinutes: login_cycle});
		} else {
			chrome.alarms.clear("cycle_login");
		}
		break;
	case 'msg_set_login_cycle':
		login_cycle = parseInt(message.data);
		if (cycle_login_flag) {
			chrome.alarms.create("cycle_login", {delayInMinutes: login_cycle, periodInMinutes: login_cycle});
		}
		break;
	}
});