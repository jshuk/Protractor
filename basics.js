console.log("jsss")
for(var i=7;i<9;i++){
	console.log(i)
}

var k=6;
do{
	console.log(k)
	k++
}
while(k<11){
	console.log("finally")
}

var a = ["jaya",9,3]
for(var i=0;i<a.length;i++){
	console.log(a[i])
}

var c = new Array();
c[0] = "jhhh"
	c[1] = "jajahhd"
		console.log(c)
		
		fibonacci(10);
		
		///fibonacci
		function fibonacci(n){
			console.log("Printing Fibonacci series")
	var t1=0
	var t2=1
	var sum=0
	for(var i=1;i<=n;i++){
		console.log(t1 + " ")
		sum=t1+t2
		t1=t2
		t2=sum
	}
}
		