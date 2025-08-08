//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayListaDeAmigos = [];
let numeroSorteado;
let nomeSorteado;

//FUNÇÃO PARA ADICIONAR AMIGO NA LISTA DE SORTEIO
function adicionarAmigo(){
	let campoInserir = document.getElementById("amigo");

	if (campoInserir.value == ""){
		alert("Por favor, insira um nome.");
	} else {
		arrayListaDeAmigos.push(campoInserir.value);
		campoInserir = document.getElementById("amigo").value = "";
		atualizarArrayLista();
	}
}

//FUNÇÃO PARA ATUALIZAR LISTA VISIVEL NA TELA
function atualizarArrayLista(){
	let listaDeAmigos = document.getElementById("listaAmigos");
	listaDeAmigos.innerHTML = "";
	let textoDaLista = "";

	for (let i = 0; i < arrayListaDeAmigos.length; i++){
		textoDaLista = textoDaLista + `<li>${arrayListaDeAmigos[i]}</li>`;
	}

	listaDeAmigos.innerHTML = textoDaLista;
}

//FUNÇÃO PARA VERIFICAR QUANDO A TECLA ENTER FOR PRESSIONADA E ADICIONAR AMIGO
function verificarTecla(event){
	if (event.keyCode === 13) {
		adicionarAmigo();
	}
}
//EVENT LISTENER PARA ACIONAR FUNÇÃO VERIFICAR TECLA
document.getElementById("amigo").addEventListener("keydown", verificarTecla);

//FUNÇÃO PARA SORTEAR AMIGO E MOSTRAR NA TELA
function sortearAmigo(){
	let ResultadoSorteio = document.getElementById("resultado");

	if (arrayListaDeAmigos.length < 2){
		alert("Impossível sortear. Adicione pelo menos dois nomes para realizar.");
	} else {
		numeroSorteado = parseInt(Math.random() * arrayListaDeAmigos.length);
		nomeSorteado = arrayListaDeAmigos[numeroSorteado];
		ResultadoSorteio.innerHTML = nomeSorteado;
	}
}