
const url = 'https://alunos.b7web.com.br/api/ping';
const params ={
	method: 'GET',
	
};
//requisição ajax/http
fetch(url, params)
	//promise01 retornará o resultado transformado em JSON
	.then((resposta)=>resposta.json())
	//promise02 trata a resposta da promise01
	.then((json)=>{
		console.log('resposta da promise: '+ json.resultado);
	});