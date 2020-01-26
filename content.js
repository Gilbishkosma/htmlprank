


chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message,sender,sendResponse){
		if(message === "start"){
			document.designMode = "on"	
		}
		else if(message === "stop"){
			document.designMode = "off"	
		}
		
}