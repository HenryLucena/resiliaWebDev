class ModelUsuario {
    constructor(nome, img) {
        this._nome = nome
        this._img = img
    }

    get nome() {
        return this._nome
    }

    get img() {
        return this._img
    }
}