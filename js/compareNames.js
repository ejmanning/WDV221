//compareNames Javascript file

<script>
	
	function compareNames()
	{var value1=document.querySelector("#value1").value;
		//give a var to name 1
		
	var value2=document.querySelector("#value2").value;
		//give a var to name 2
		
	if (value1==value2)
		{var result="Same"}
		//if they are equal it will result with "Same"
	else
		{var result="Different"}
		//if they are not equal then it will result with "Different"
		
		document.querySelector("#result").innerHTML=result;
		//placing the result value of the if statement into it's own var
	}
	//end of function
	
	function clearResults()
	
	{document.querySelector("#result").innerHTML="";}
	//clear span id results
	
</script>
