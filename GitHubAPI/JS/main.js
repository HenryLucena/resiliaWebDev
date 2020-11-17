let form = document.querySelector('#formBusca')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let divRepo = document.querySelector('#exibeRepositorio')

    divRepo.innerHTML = "";

    let entrada = document.querySelector('#procurarUsuario')

    let valor = entrada.value 

    Controller.MostraUsuario(valor)
    Controller.MostraRepositorio(valor)
})