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
