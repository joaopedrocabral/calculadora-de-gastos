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
<<<<<<< HEAD
        listaGastos.push(descricao);
=======
        listaGastos.push({descricao: item, valor: valor});
>>>>>>> b7f27b302051926aa60898e04b0d502d514b68a0
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
        novoGasto.textContent = `${listaGastos[i].descricao} - R$ ${listaGastos[i].valor}`
        lista.appendChild(novoGasto);
    }
console.log(listaGastos)
let total = listaGastos.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual
}, 0);
document.getElementById('total').innerText(total)
}