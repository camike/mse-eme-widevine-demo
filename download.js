	  
  self.onmessage = function(event){
	  downloadFragment(event.data.index, event.data.url, event.data.type);
  }
	  
  function downloadFragment(index, url, type){
	  var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function(e){
         var data = new Object();
		 data.index = index;
		 data.type = type;
		 data.fragment = e.target.response;
		 postMessage(data);	   
	  };
      xhr.send(null);
  }