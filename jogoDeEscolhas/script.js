var botao1 = document.querySelector("#btn-1")
var botao2 = document.querySelector("#btn-2")
var texto = document.querySelector("#textBox")



function comecar() {

    botao1.onclick = escolhaInicial

}

function  escolhaInicial() {

    texto.textContent = "Você acorda e se lembra que o mundo está em uma pandemia"

    botao2.style.display = "inline-block";

    botao1.innerText = "Ignorar e ir pro churrascão"
    botao2.innerText = "Ficar em casa e ir pro pc"

    botao1.onclick = corongado ;
    botao2.onclick = vaiProPc;

}

function corongado() {
    texto.textContent = "Você saiu pro churras, foi corongado e morreu"

    botao1.innerText = 'Reiniciar'
    

    botao1.onclick = escolhaInicial;
    botao2.style.display = "none";

}

function vaiProPc(){
    texto.textContent = "Vai pro pc para aprender a programar!"

    botao1.innerText = "Se destrair e ir pro facebook"
    botao2.innerText = "Estudar"

    botao1.onclick = procrastinou;
    botao2.onclick = estudou;
}

function estudou(){
    texto.textContent = "Você aprendeu a teoria da matéria"

    botao1.innerText = "Fazer exercicios e projetos"
    botao2.innerText = "Ir para o facebook"

    botao1.onclick = parabens;
    botao2.onclick = procrastinou;
}

function procrastinou() {
    texto.textContent = "Você procrastinou demais, não conseguiu fazer o case das entrevistas e falhou"

    botao1.innerText = "Reiniciar"

    botao1.onclick = escolhaInicial;
    botao2.style.display = "none";
}

function parabens() {
    texto.textContent = "Parabéns! Você praticou, fez projetos e conseguiu concluir o case das entrevistas e está empregado"

    botao1.innerText = "Reiniciar";

    botao1.onclick = escolhaInicial;
    botao2.style.display = "none";
}

comecar()
