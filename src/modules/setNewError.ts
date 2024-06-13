function setNewEror(result: boolean) {
  const errorMensage = document.createElement('div')
  const containerDashboard = document.querySelector<HTMLElement>('.painelDeCriacao')
  const elementExist = containerDashboard?.querySelector('.errorMensage')

  if(result && containerDashboard && !elementExist) {
    errorMensage.classList.add('errorMensage')
    errorMensage.innerHTML = '<p>Algum campo está incompleto, tente novamente.</p>'
    containerDashboard.appendChild(errorMensage)
  }

  if(!result && containerDashboard) {
    const element = containerDashboard.querySelector('.errorMensage')
    if(element) {
      containerDashboard.removeChild(element)
    }
  }
}

export default setNewEror;
