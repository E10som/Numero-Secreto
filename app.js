let listaDeNumeros = [];
let numeroEscolhido;
let tentativas = 1;
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();

function exibirTexto(TAG, texto) {
    let campo = document.querySelector(TAG);
    campo.innerHTML = texto;
}

function mensagemInicial(){

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de 1 a 10');

}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto) {
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns,você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;    
        
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagemTentativas); 
        
        document.getElementById('reiniciar').removeAttribute('disabled');        
    } 
    else {
        if(chute > numeroSecreto) {
            exibirTexto('p', 'Seu número é maior que o número secreto');
        } 
        else {                    
            exibirTexto('p', 'Seu número é menor que o número secreto');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeros = listaDeNumeros.length;

    if (quantidadeDeNumeros == numeroLimite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {

        return numeroAleatorio();
    } 
    else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

    limparCampo();
    mensagemInicial();
}

