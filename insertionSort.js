var input = [2,5,8,4,99,89,101,1000,999,454,666,989,989,454]

function insertion(input){
	for(var i=1;i < input.length ;i++){
		var current = input[i]
		var j=i-1
		while(j>=0 && input[j] > current){
			//move
			input[j+1] = input[j]
			j--
		}
		
		input[j+1] = current
	}
	
	return input
}

var sortedArray = insertion(input)
console.log(sortedArray)


//best for small arrays and almost sorted array
