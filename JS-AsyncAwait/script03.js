function requisicao01(){
const url = 'https://alunos.b7web.com.br/api/ping';

fetch(url)
	//não há espera
	.then(r=>r.json())
	.then(json=>{
		console.log(json.resultado);
		});
	//instrução anterior
	console.log('alguma coisa')
}


//requisição assincrona 
async function requisicao02(){
const url = 'https://alunos.b7web.com.br/api/ping';
	const r = await fetch(url);
	let json = await r.json();
	//o resultado é esperado para, só então,
	// proceguir com o restante do código 
	console.log(json.resultado);
	//instrução posterior
	console.log('alguma coisa')
}


requisicao02();