(function() {
	
	setInterval(function(){
		var demo = document.getElementById('elTaskWrap');
		var liEle = demo.getElementsByTagName('li');
		for(var i=0;i<liEle.length;i++){
		    var aEle = liEle[i].getElementsByTagName('a');
			if(aEle.length != 0){
				aEle[0].click();
			}
		}
	},1000);
	
	setInterval(function(){
		
		console.log(new Date()+"刷新");
		
		window.location.reload();
		
	},600000);
	
})();