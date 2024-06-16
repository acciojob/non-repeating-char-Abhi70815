function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
		let isrepeated=false;
		for(let j=0;j<str.length;j++){
        if(i!==j && str[i]===str[j]){
        isrepeated=true;
			break;
		}
		}
		if(!isrepeated){
    return str[i];
		}
		
		
}
	return  null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
