function num(){
   var input = document.getElementById("numbers").value;

	 if(input % 3 === 0 ) {
		 console.log("Bing");
	 }
	 else if (input % 5 === 0) {
		 console.log("Bong");
	 	}

	 else if (input % 3 === 0 && input % 5 === 0)
	 	console.log("BingBong");
 }
