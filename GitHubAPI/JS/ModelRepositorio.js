class ModelRepositorio {
    constructor(name, linguagem, url) {
        this._nomeRepositorio = name
        this._linguagemRepositorio = linguagem
        this._linkRepositorio = url
    }

    get nome(){
        return this._nomeRepositorio
    }
    
    get linguagem() {
        return this._linguagemRepositorio
    }

    get link() {
        return this._linkRepositorio
    }
}