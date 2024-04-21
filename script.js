function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalcost=0;
	arr.sort((a,b)=>a-b);

	while (arr.length>1) {
		const num1=arr.shift();
		const num2=arr.shift();

		const cost = num1+num2;

		totalcost+=cost;

		arr.push(cost);

		arr.sort((a, b) => a - b);
	}
	return totalcost; 
}

module.exports=mincost;
