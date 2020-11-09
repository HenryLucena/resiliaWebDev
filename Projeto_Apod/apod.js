/* let request = new XMLHttpRequest();

const tituloArt = document.querySelector('#tituloArtigo')
const explicacao = document.querySelector('#explanation')
const data = document.querySelector('#data')
const linkImg = document.querySelector('#linkImg')
const img = document.querySelector('#imagemPrincipal')

request.onreadystatechange = function (dados) {
    if (this.status == 200 && this.readyState == 4) {
        let obj = JSON.parse((request.responseText));

        data.innerHTML = obj.date
        img.src = obj.url
        linkImg.href = obj.hdurl
        tituloArt.innerHTML = obj.title
        explicacao.innerHTML = obj.explanation


        console.log(obj)
    }
}

request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=oHgKhiqm8M87Ka5fzXNdmJUFLud2vbt5xCz9ZuQ2");

request.send();
 */
class ApodModel {

    constructor() {
        this._tituloArt = document.querySelector('#tituloArtigo')
        this._explicacao = document.querySelector('#explanation')
        this._data = document.querySelector('#data')
        this._linkImg = document.querySelector('#linkImg')
        this._img = document.querySelector('#imagemPrincipal')

    }

    buscaDados() {

        let request = new XMLHttpRequest()

        request.addEventListener('load', () => {
            if (request.status == 200) {
                let dados = this._processaResponse(request.responseText)

                this._atualiza(dados)
            }
        })

        request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=oHgKhiqm8M87Ka5fzXNdmJUFLud2vbt5xCz9ZuQ2')

        request.send()
    }

    _processaResponse(responseString) {
        let response = JSON.parse(responseString)

        return response
    }

    _atualiza(dados) {

        this._data.innerHTML = dados.date
        this._img.src = dados.url
        this._tituloArt.innerHTML = dados.title
        this._explicacao.innerHTML = dados.explanation
        this._linkImg.href = dados.hdurl

    }

    getData() {
        return this._data
    }
    getImg() {
        return this._img
    }
    getTitulo() {
        return this._titulo
    }
    getExplicacao() {
        return this._explicacao
    }
    getLinkImg() {
        return this._linkImg
    }
}

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