class ApodView {

    constructor() {}

    render(model) {

        this.tituloArt = model.getTitulo
        this.explicacao = model.getExplicacao
        this.data = model.getData
        this.linkImg = model.getImg
        this.img = model.getImg
    }
}