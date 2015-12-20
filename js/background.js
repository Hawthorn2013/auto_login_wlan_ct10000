function create_page_for_login() {
	chrome.tabs.create({url: "http://www.baidu.com/"}, function(){});
}

//chrome.alarms.create("cycle_login", {delayInMinutes: 1, periodInMinutes: 1});

chrome.alarms.onAlarm.addListener(function(alarm) {
	create_page_for_login();
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (typeof(message.EnableCycleLogin) != "undefined") {
		if (message.EnableCycleLogin == true) {
			chrome.alarms.create("cycle_login", {delayInMinutes: message.LoginCycle, periodInMinutes: message.LoginCycle});
		}
		else {
			chrome.alarms.clear("cycle_login");
		}
	}
});