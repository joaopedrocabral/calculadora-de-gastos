function alterarMensagem (id, novaMensagem){
    const elemento = document.getElementById(id);
    if (!elemento) {
        console.warn('Elemento não encontrado:', id);
    }
    elemento.textContent = novaMensagem;
}

function limparCampo(id) {
    const campo = document.getElementById(id);
    campo.value = '';
    
}

const testeDesc = /[a-zA-Z]/;
const testeValor = /[0-9]/;
let listaGastos = [];

function botaoAdicionar(){
    const item = document.getElementById('descInput').value;
    const valor = document.getElementById('valorInput').value;

    if (item === "" || valor === "" || !testeDesc.test(item) || !testeValor.test(valor)){
        alterarMensagem('h3', 'Digite uma gasto válido!');
        limparCampo('descInput');
        limparCampo('valorInput');
    } else {
        listaGastos.push(descricao);
        alterarMensagem('h3', 'Gasto adicionado com sucesso!');
        limparCampo('descInput');
        limparCampo('valorInput');
        exibirGastosNaTela();
    }
}

function exibirGastosNaTela(){
    const lista = document.getElementById('listaGastos');
    lista.innerHTML = '';

    for (let i = 0; i < listaGastos.length; i++) {
        let novoGasto = document.createElement('li');
        novoGasto.textContent = listaGastos[i];
        lista.appendChild(novoGasto);
    }

}