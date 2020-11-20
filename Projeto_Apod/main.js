let form = document.querySelector('#inputData')

form.addEventListener('submit', () => {
    event.preventDefault()
    let d = document.querySelector('#data')
    let valor = d.value;

    ApodController.IniciaApod(valor)
})