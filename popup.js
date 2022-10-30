document.getElementById("start_prank").addEventListener("click", function () {
	startPrank("start")
});

document.getElementById("stop_prank").addEventListener("click", function () {
	stopPrank("stop")
});


const params = {
	active: true,
	currentWindow: true
}

function stopPrank(message) {
	chrome.tabs.query(params, gotTab)
	function gotTab(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message)
	}
}


function startPrank(message) {
	chrome.tabs.query(params, gotTab)
	function gotTab(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message)
	}
}