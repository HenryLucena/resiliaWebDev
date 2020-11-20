class ApodViewer {

  constructor(model) {
    this._copy = model.copy
    this._data = model.data
    this._explicacao = model.explicacao
    this._img = model.img
    this._titulo = model.titulo
  }


  render() {

    const data = document.querySelector('#dataAtual')
    const img = document.querySelector('#astronomicPic')
    const titulo = document.querySelector('#tituloImg')
    const copyright = document.querySelector('#copy')
    const exp = document.querySelector('#explicacao')

    data.innerHTML = `Data sendo vista: ${this._data}`
    img.src = this._img
    titulo.innerHTML = this._titulo
    copyright.innerHTML = `Image Credit: ${this._copy}`
    exp.innerHTML = `Explanation: ${this._explicacao}`
  }
} 