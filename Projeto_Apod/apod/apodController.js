class ApodController {
    constructor(){}

    carregaPagina(){
        let user = new ApodModel()
        user.buscaDados()

        let view = new ApodView()
        view.render(user)
    }
}

let controller = new ApodController()
controller.carregaPagina()