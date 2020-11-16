var botao1 = document.querySelector("#btn-1")
var botao2 = document.querySelector("#btn-2")
var texto = document.querySelector("#textBox")



function comecar() {

    botao1.onclick = acorda

}

function acorda() {
    texto.textContent = "Você acorda e se lembra de um sonho estranho que teve esta noite, então levanta da cama as pulos porque lembrou que combinou de encontrar seus companheiros na taverna do Corcel Alado."

    botao1.onclick = taverna

    botao1.innerHTML = "Ir até a taverna"
}

function taverna(){
    texto.textContent = "Ao entrar na taverna você percebe que o local não está muito cheio e rapidamente encontra seu grupo. O que você faz?"

    botao1.innerHTML = "Ir ao balcão pegar uma bebida"
    botao2.innerHTML = "Ir até a mesa deles"

    botao2.style.display = "inline-block";

    botao1.onclick = balcao
    botao2.onclick = mesa
}

function balcao() {
    texto.textContent = "Você pega um Copo de cerveja e vai até o seu grupo"

    botao1.innerHTML = "Continuar"
    botao2.style.display = "none"

    botao1.onclick = mesa
}

function mesa() {
    texto.textContent = "Chegando na mesa você cumprimenta a todos e um dos seus companheiros começa a falar sobre o trabalho que ele conseguiu para você"

    botao1.innerHTML = "Continuar"
    botao2.style.display = "none"

    botao1.onclick = plano;
}

function plano() {
    texto.textContent = "Ele começa a falar do serviço: Um comerciante pediu ajuda para você resgatar uma carta e uma adaga que foi roubada dele por um antigo sócio. O item está na torre do mago e você terá que invadi-la. Vá a noite, quando as patrulhas da cidade estão reduzidas"

    botao1.innerHTML = "Continuar"

    botao1.onclick = primeiraEscolha
}

function primeiraEscolha() {
    texto.textContent = "A noite cai e você vai até a praça que fica localizada em frente a torre. O que você faz?"

    botao2.style.display = "inline-block"

    botao1.innerHTML = "Tentar pular o muro da residência"
    botao2.innerHTML = "Tentar invadir pelos esgotos"

    botao1.onclick = muro;
    botao2.onclick = esgoto;
}

function muro() {
    texto.textContent = "Quando você sobe nos muros percebe que há dois guardas la em cima te encarando.O que você faz?"

    botao1.innerHTML = "Tentar lutar contra eles"
    botao2.innerHTML = "Tentar fugir deles"

    botao1.onclick = lutaMuro;
    botao2.onclick = fugaMuro;
}

function lutaMuro() {
    texto.textContent = "Enquanto voces estão lutando, uma patrulha de guardas da cidade passa pelo local e interfere na briga. Você foi preso"

    botao2.style.display = "none"

    botao1.innerHTML = "Restart"

    botao1.onclick = acorda
}

function fugaMuro() {
    texto.textContent = "Durante a perseguição você vira em uma esquina e se depara com uma patrula de guardas da cidade. O que você faz?"

    botao1.innerHTML = "Tentar passar pelos guardas"
    botao2.innerHTML = "Tentar convencer os guardas da cidade que você está sendo perseguido por um criminoso"

    botao1.onclick = tentaPassar;
    botao2.onclick = tentaEnganar;
}

function tentaPassar() {
    texto.textContent = "Eles te param e logo depois o seu perseguidor chega. Você tenta argumentar que está sendo perseguido por um criminoso. Mas eles não acreditam e te prendem"

    botao2.style.display = "none"

    botao1.innerHTML = "Restart"

    botao1.onclick = acorda;
}

function tentaEnganar() {
    texto.textContent = "Você tenta convence-los que é a vitima e está sendo perseguido por um criminoso, mas eles conhecem o simbolo da guarda do mago e te prendem"

    botao2.style.display = "none"

    botao1.innerHTML = "Restart"

    botao1.onclick = acorda;

}

function esgoto() {
    texto.textContent = "Você encontra uma entrada pelos esgotos e  segue pelos dutos tentando encontrar um caminho para adentrar a residência"

    botao2.style.display = "none"

    botao1.innerHTML = "Continuar"

    botao1.onclick = inicioEsgoto;
}

function inicioEsgoto() {
    texto.textContent = "Você se deparam com dois caminhos, um pra e esqueda e outro pra direita. Por qual você segue?"

    botao2.style.display = 'inline-block';

    botao1.innerHTML = "Ir pela esquerda"
    botao2.innerHTML = "Ir pela direita"

    botao1.onclick = caminhoEsquerda;
    botao2.onclick = caminhoDireita;

}

function caminhoEsquerda() { 
    texto.textContent = "Ao seguir por este caminho você se encontra com uma grade. Você facilmente arromba a grade e segue em frente"

    botao2.style.display = "none"

    botao1.innerHTML = "Continuar"

    botao1.onclick = escolhaEsquerda1;
}

function escolhaEsquerda1() {
    texto.textContent = "De repente, enquanto você andava em frente, você escuta um clique e um alçapão se abre embaixo dos seus pés e você cai em um ninho de homens-rato"

    botao2.style.display = "inline-block"

    botao1.innerHTML = "Chorar pela mãe"
    botao2.innerHTML = "Lutar Bravamente"

    botao1.onclick = chora;
    botao2.onclick = lutaBravamente;
}

function chora() {
    texto.textContent = "Os homens-ratos lhe atacam impiedosamente e te destroçam. Você morreu!"

    botao2.style.display = "none"

    botao1.innerHTML = 'Restart'

    botao1.onclick = acorda;
}

function lutaBravamente() {
    texto.textContent = "Você bravamente começa a lutar com os homens-rato, mas eles são muitos e lentamente o cansaço e os ferimentos ganham da sua constituição. Você morreu!"

    botao2.style.display = "none"

    botao1.innerHTML = 'Restart'

    botao1.onclick = acorda;
}
    

function caminhoDireita () {
    texto.textContent = "Seguindo um pouco mais, você encontra um bueiro. O que você faz?"

    botao1.innerHTML = "Subir pelo bueiro"
    botao2.innerHTML = "Seguir em frente"

    botao1.onclick = bueiroUm
    botao2.onclick = emFrente
}


function emFrente() {
    texto.textContent = "Após um tempo de caminhada vocês encontram um beco sem saida e um bueiro acima de vocês O que você faz?"

    botao1.innerHTML = "Subir pelo bueiro"
    botao2.innerHTML = 'Voltar'

    botao1.onclick = subida1
    botao2.onclick = caminhoDireita
}

function subida1() {
    texto.textContent = "Ao subir pelo bueiro você se depara com uma patrulha que estava passando pela rua e é preso"

    botao2.style.display = 'none'

    botao1.innerHTML = "Restart"

    botao1.onclick = acorda;
}

function bueiroUm() {
    texto.textContent = 'Você está na parte de trás da residência e tem uma porta  entre-aberta O que você faz?'

    botao1.innerHTML = 'Entrar pela parte de trás da casa'
    botao2.innerHTML = 'Dar a volta e ir para o jardim da frente'

    botao1.onclick = atrasCasa;
    botao2.onclick = jardimCasa;
}

function atrasCasa() {
    texto.textContent = "Você entra silenciosamente e vê dois funcionarios bebendo na cozinha. O que você faz?"

    botao1.innerHTML = "Atacar os funcionarios"
    botao2.innerHTML = "Finjir que é um membro da guarda"

    botao1.onclick = lutaFuncionarios;
    botao2.onclick = finjirGuarda;

}

function lutaFuncionarios(){
    texto.textContent = "Você ataca os dois funcionarios e eles tentam revidar, mas não conseguem e você os mata. Mas acaba fazendo muito barulho e os guardas chegam"

    botao2.style.display = "none"

    botao1.innerHTML = "Atacar os guardas";
    botao1.onclick = lutaFuncionarios2
}

function lutaFuncionarios2 () {
    texto.textContent = "Você recebe um ataque mortal no meio da luta e você é morto durante o confronto"

    botao1.innerHTML = "Restart"
    botao1.onclick = acorda
}

function finjirGuarda(){
    texto.textContent = "Os funcionarios estão bebados demais pra se importar com você"

    botao2.style.display = 'none'

    botao1.innerHTML = "Continuar"
    botao1.onclick = hallEntrada

}

function jardimCasa(){
    texto.textContent = "Quando você chega no jardim da frente, percebe que há um tipo de cão de guarda dormindo. O que você faz?"

    botao1.innerHTML = "Tentar matar o cão-guarda"
    botao2.innerHTML = "Tentar passar despercebido"

    botao1.onclick = lutaCao;
    botao2.onclick = passaDespercebido;
}

function lutaCao(){
    texto.textContent = 'Você consegue matar o cão, mas recebeu um ferimento na coxa e percebe que os guardas estão chegando. Você tenta fugir, mas eles rapidamente te alcançam e conseguem te imobilziar. Você foi levado até as autoridades e está preso'

    botao2.style.display = 'none'

    botao1.innerHTML = "Restart"
    botao1.onclick = acorda
}

function passaDespercebido(){
    texto.textContent = "Você consegue se esgueirar sem acordar o cão. Mas percebe que a porta de entrada está trancada. O que você faz?"

    botao1.innerHTML = "Tentar volta pra parte de tras da casa"
    botao2.innerHTML = "Tentar arrombar a porta"

    botao1.onclick = tentaVoltar;
    botao2.onclick = hallEntrada;
}

function tentaVoltar() {
    texto.textContent = "Desta vez o cão-guarda sua presença. e da um latido. O que você faz?"

    botao1.innerHTML = "Ficar parado"
    botao2.innerHTML = "Sacar a espada e atacar o cão"

    botao1.onclick = ficaParado;
    botao2.onclick = atacaCao;
}

function atacaCao(){
    texto.textContent = "Você consegue matar o cão, mas o barulho atraiu os guardas."

    botao2.style.display = "none"

    botao1.innerHTML = "Atacar os guardas"
    botao1.onclick = atacarGuardas;
}

function ficaParado() {
    texto.textContent = "Os guardas chegam e te intimam. O que você faz?"

    botao1.innerHTML = 'Tenta acalma-los'
    botao2.innerHTML = "Saca sua arma e ataca os guardas"

    botao1.onclick = ataqueDosGuardas;
    botao2.onclick = atacarGuardas;
}

function ataqueDosGuardas() {
    texto.textContent = "Os guardas vão pra cima de você. Você não consegue sacar sua arma a tempo e um deles te desfere um ataque mortal"

    botao2.style.display = "none"

    botao1.innerHTML = 'Restart'
    botao1.onclick = acorda; 
}

function atacarGuardas(){
    texto.textContent = "Você consegue matar os guardas e acha uma chave em um dos corpos"

    botao2.style.display = 'none'

    botao1.innerHTML = "Ir até a porta de entrada"
    botao1.onclick = hallEntrada;
}

function hallEntrada(){
    texto.textContent = "Você está no Hall de entrada da residência e percebe que não tem movimento e vai direto até a escadaria para procurar os aposentos do mago"

    botao2.style.display = 'none'

    botao1.innerHTML = "Continuar"
    botao1.onclick = aposentosMagos;

}

function aposentosMagos(){
    texto.textContent = 'Você sobe até os aposentos do mago. Não há ninguem lá dentro e você percebe que tem uma escrivaninha e um baú. O que você faz?'

    botao2.style.display = "inline-block"

    botao1.innerHTML = "Procurar no baú"
    botao2.innerHTML = "Procurar na escrivaninha"

    botao1.onclick = bauTrancado;
    botao2.onclick = escrivaninha;

}

function escrivaninha() {
    texto.textContent = "Não há nada na escrivaninha"

    botao2.style.display = "none"

    botao1.innerHTML = "Ir até o baú"
    botao1.onclick = bauTrancado
}

function bauTrancado() {
    texto.textContent = "O baú está trancado. O que você faz?"

    botao2.style.display = "inline-block"

    botao1.innerHTML = "Verificar se tem armadilhas no baú"
    botao2.innerHTML = "Arrombar o baú"

    botao1.onclick = armadilhaBau
    botao2.onclick = abrirBau
}

function armadilhaBau(){
    texto.textContent = "Não tem armadilhas. (Que tipo de psicopata colocaria armadilhas no proprio quarto?)"

    botao2.style.display = 'none'

    botao1.innerHTML = "Arrombar o baú"
    botao1.onclick = abrirBau
}

function abrirBau() {
    texto.textContent = "Você encontra a adaga e a carta. Hora de sair dai"

    botao2.style.display = "none"

    botao1.innerHTML = "Dar o fora"
    botao1.onclick = fuga;
}

function fuga() {
    texto.textContent = "Você consegue sair da residência sem problemas, retornando pelo mesmo lugar que entrou. Você vai até sua casa para dormir um pouco antes de se encontrar com o seu contratante no local e horas marcado"

    botao1.innerHTML = "Ir dormir"
    botao1.onclick = manhaSeguinte
}

function manhaSeguinte(){
    texto.textContent = 'Na manhã seguinte antes de ir até o local marcado, um pensamento sobre ler a carta passa pela sua cabeça O que você faz?'

    botao2.style.display = "inline-block"

    botao1.innerHTML = "Ignorar o pensamento e não ler a carta"
    botao2.innerHTML = "Ler a carta"

    botao1.onclick = encontrarMercador;
    botao2.onclick = cartaLida;
}

function encontrarMercador() {
    texto.textContent = "O mercador parece bem aliviado em te ver. Ele te cumprimenta gentilmente e na hora em que ela pega a carta e a adaga. Você sente uma lamina perfurando suas costas"

    botao2.style.display = 'none'

    botao1.innerHTML = "Continuar"
    botao1.onclick = final1
}

function final1() {
    texto.textContent = 'A ultima coisa que você ve antes de morrer no beco é o mercador indo embora rindo da sua situação'

    botao1.innerHTML = 'Restart'
    botao1.onclick = acorda;
}

function cartaLida() {
    texto.textContent = "A  carta dizia sobre um culto que pretende ressuscitar uma antiga divindade citada como Dama dos mortos. O que você faz?"

    botao1.innerHTML = 'Ir ao encontro do mercador'
    botao2.innerHTML = 'Levar a carta até as autoridades'

    botao1.onclick = encontrarMercador
    botao2.onclick = cartaDenunciada
}

function cartaDenunciada(){
    texto.textContent = "Poucos dias depois você escuta que o mercador desapareceu da cidade sem deixar rastros, e que ele está sendo procurado por todas as autoridades da cidade"

    botao2.style.display = "none"

    botao1.innerHTML = "Continuar bebendo"
    botao1.onclick = irDormir

}

function irDormir(){
    texto.textContent = "Você bebeu até cair a noite e então foi pra casa"

    botao1.innerHTML = "Ir dormir"
    botao1.onclick = acorda
}




comecar()
