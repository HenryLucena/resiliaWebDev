class View {
    static inserirUsuario(nome, img) {

        let usuario = document.querySelector('#nomeUsuario')
        let imagem = document.querySelector('#imagemUsuario')


        usuario.textContent = nome
        imagem.src = img

    }

    static inserirRepositorio(nome, linguagem, link) {

       let divRepo = document.querySelector("#exibeRepositorio")

       let list = document.createElement('ul')
       divRepo.appendChild(list)

       let nomeRepositorio = document.createElement('li')
       nomeRepositorio.innerText = `O nome do repositorio: ` + nome
       list.appendChild(nomeRepositorio)

       let linguagemRepositorio = document.createElement('li')
       linguagemRepositorio.innerText ="linguagem mais utilizada no repositorio: " + linguagem
       list.appendChild(linguagemRepositorio)

       let linkRepositorio = document.createElement('a')
       linkRepositorio.innerText = "Clique aqui para ir direto ao repositorio"
       linkRepositorio.href = link
       list.appendChild(linkRepositorio)

       
    }
}