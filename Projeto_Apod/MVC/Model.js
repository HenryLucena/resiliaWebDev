class ApodModel {
    constructor(copyright, data, explanation, imagem, titulo) {
        this._copyright = copyright
        this._data = data
        this._explanation = explanation
        this._imagem = imagem
        this._titulo = titulo
    }

    get dados() {
        return {
            copy: this._copyright,
            data: this._data,
            explicacao: this._explanation,
            img: this._imagem,
            titulo: this._titulo,
        }
    }
}