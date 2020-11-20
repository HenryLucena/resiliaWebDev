class ApodController {
  constructor() { }

  static IniciaApod(data) {

    let request = new XMLHttpRequest;

    request.addEventListener('load', () => {

      if (request.status == 200) {
        let dados = JSON.parse(request.responseText)

        let model = new ApodModel (dados.copyright, dados.date, dados.explanation, dados.url, dados.title)

        let view = new ApodViewer(model.dados)
        view.render()
        
      }

    })

    request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=oHgKhiqm8M87Ka5fzXNdmJUFLud2vbt5xCz9ZuQ2&date=${data}` )


    request.send()

  }

}
