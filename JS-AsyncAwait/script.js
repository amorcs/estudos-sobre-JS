function fazer(){
	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve('ok!');
		},5000);
	});
	return promise
}

fazer().then(resposta =>{
	console.log('resposta : ' +resposta);
})