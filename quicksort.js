
var input = [6, 5, 3, 1, 8, 7, 2, 4]

function swap(i,j,input){
	var temp = input[i]
	input[i] = input[j]
	input[j] = temp
}

function partition(low,high,input){
	var i=low
	var j = high
	var pivot = input[Math.floor((low+high)/2)]
	
	while(i <= j){
		while(input[i] < pivot){
			i++
		}
		
		while(input[j] > pivot){
			j--
		}
		
		if(i <= j){
			swap(i,j,input)
			i++
			j--
		}
	}
	return i
}


function quickSort(low,high,input){
	var index
	if(input.length > 1){
		index = partition(low,high,input)
		if(low < index-1){
			quickSort(low,index-1,input)
		}
		
		if(index<high){
			quickSort(index,high,input)
		}
	}
	
	return input
}

///call
var sortedArray = quickSort(0,input.length-1,input)
console.log(sortedArray)