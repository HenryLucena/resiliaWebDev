let teste = document.querySelector('#formBusca')

teste.addEventListener('submit', function(event){
    event.preventDefault()

    let entrada = document.querySelector('#procurarUsuario')

    let valor = entrada.value 

    Controller.MostraUsuario(valor)
    Controller.MostraRepositorio(valor)
})