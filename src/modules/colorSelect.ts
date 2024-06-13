export let color: string = "#e079a2";

export function colorSelect(botoes: NodeList) {
  if (botoes[0].parentElement instanceof HTMLLabelElement) {
    botoes[0].parentElement.classList.add('selecionado');
  }

  function colorSelected(event: Event): void {
    botoes.forEach((botao) => {
      if (botao instanceof HTMLInputElement) {
        if (botao.checked) {
          botao.parentElement?.classList.add('selecionado');
        } else {
          botao.parentElement?.classList.remove('selecionado');
        }
      }
    });
    if (event.target instanceof HTMLInputElement) {
      const atributoCor = event.target.getAttribute('data-cor')
      if(atributoCor) {
        color = atributoCor;
      }
    }
  }

  botoes.forEach((botao) => {
    if (botao instanceof HTMLInputElement) {
      botao.addEventListener('click', colorSelected);
    }
  });
}
