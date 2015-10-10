function simpleTimeout(consoleTimer){
	console.timeEnd(consoleTimer)
}

console.time("twoseconds");
setTimeout(simpleTimeout, 2000, "twoseconds");
