class Controller {
    static MostraUsuario(user) {
        let requestUsuario = new XMLHttpRequest

        requestUsuario.open('GET', `https://api.github.com/users/${user}`, false)

        requestUsuario.addEventListener('load', () => {
            let dados = JSON.parse(requestUsuario.responseText)

            let userName = dados.name
            let userImg = dados.avatar_url

            let model = new ModelUsuario(userName, userImg)

            View.inserirUsuario(model.nome, model.img)
        })

        requestUsuario.send()
    }

    static MostraRepositorio(user) {
        let requestRepositorio = new XMLHttpRequest

        requestRepositorio.open('GET', `https://api.github.com/users/${user}/repos`, false)

        requestRepositorio.addEventListener('load', () => {

            let dados = JSON.parse(requestRepositorio.responseText)

            dados.forEach(element => {

                let model = new ModelRepositorio(element.name, element.html_url, element.language)

                View.inserirRepositorio(model.nome, model.link, model.linguagem,)

            });
        })

        requestRepositorio.send()
    }
}

