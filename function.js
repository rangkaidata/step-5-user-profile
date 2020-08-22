/* App step 5: user profile */
'use strict';

function loadXHR(url,obj,callback){
	var request = new XMLHttpRequest();
	var dbParam = JSON.stringify(obj);

	request.onload=function(){		
		if (request.readyState===4){
			var paket = JSON.parse(request.responseText);
			// alert(paket.msg);
			callback(paket);
		}
		else {
			console.log('Network request failed with response ' + request.status + ': ' + request.statusText)
		}
	};
	request.open('POST', url);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send(dbParam);
}
