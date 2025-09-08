let limiteDeGastos = document.getElementById('limiteDeGastos').value;

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
        listaGastos.push({descricao: item, valor: Number(valor)});
        alterarMensagem('h3', 'Gasto adicionado com sucesso!');
        limparCampo('descInput');
        limparCampo('valorInput');
        exibirGastosNaTela();
    }
}

function somarTotal(){
    const total = document.getElementById('total');
    const somaValores = listaGastos.reduce((soma, gasto) => soma + gasto.valor, 0)
    const saldoDisponivel = document.getElementById('saldoDisponivel');
    total.innerText = somaValores.toFixed(2);
    saldoDisponivel.innerText = limiteDeGastos - somaValores;
}

function exibirGastosNaTela(){
    const lista = document.getElementById('listaGastos');
    lista.innerHTML = '';

    for (let i = 0; i < listaGastos.length; i++) {
        let novoGasto = document.createElement('li');
        novoGasto.textContent = `${listaGastos[i].descricao} - R$ ${listaGastos[i].valor.toFixed(2)}`
        lista.appendChild(novoGasto);
    }
    somarTotal();
}   