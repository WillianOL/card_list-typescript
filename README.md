<div> 
  <h1 align="center">To-do List - Typescript👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Uma to-do list feita inteiramente com typescript.</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/28657311-14bd-4a36-8c55-fa6282c302ac" width='950px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
  <div>
    <img src= "https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB" width='140px'>
    <img src= "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" width='85px'>
    <img src= "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width='98px'>
  </div>
</div>


## Sobre o projeto📃
Esta é uma to-do list feita com typescript. O principal intuito desse projeto é exercitar meus conhecimentos sobre typescript, o que comecei a estudar recentemente. Nesse projeto pude aplicar as principais metodologias sobre tipagem em typescript, criando interfaces, tipagem de dados, type guards, control flow, eventos, `class`, `object`, e `localStorage`.
<br>
<br>
Na aplicação, é possível adicionar um titulo, uma descrição da tarefa, selecionar uma cor e uma data para conclusão. Todos os campos validados, ou seja, se um deles estiver em branco é exibido uma mensagem de error para o usuário. Cada card adicionado é salvo no localStorage, ao voltar a página os cards salvos são distribuidos no painel de cards. Por fim, é possível deletar qualquer card adicionado.
 
### Deploy(vercel)✈

◻<a href="https://card-list-typescript.vercel.app/src/index.html">To Do List - Typescript</a>

&nbsp;
&nbsp;

## Explicação
### Organização
Para a organização do código, optei por usar os modulos, separando cada funcionaldiade em um arquivo separado. O que com o typescript foi facilidado ainda mais, pois algumas funções eu usei em outras e os argumentos são requisitados e mostrando seu tipo.
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/88923324-4264-451a-b8b0-22603d8e0a66" width='250px'>
</div>

### `takeValuesInputs.ts` - Seleção dos valores dos inputs
Essa função foi criada para pegar os valores dos inputs e validar se estão preenchidos corretamente. Utilizando outra função de error, para caso a validação retorne um error e para o envio do dos inputs. Anotados os tipos e validando para garantir que os dados terão os tipos corretos com o typescript. Utilizando por exemplo o `instanceof`.

#### Inputs, botão de submit e função que dispara ao clique do botão.
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/aefc01da-7452-49ba-845a-3a48e0d22973" width='750px'>
</div>
&nbsp;

A função `validateInputs` recebe a array de elementos, depois é feito um find para verificar se algum dos campos não está preenchido retornando `true` ou `false`. Se for true, executa a função de error `serNewError`.
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/5bee4628-3841-43ea-a9ca-033365fb5217" width='750px'>
</div>
&nbsp;

Se todos os inputs estiverem preenchidos, no `else` cria duas váriaveis `value` e `name` para armazenar o valor do input e seu name. Depois é feito um map pegando todos os valores e name dos inputs,  retornando em um objeto com as propriedades `itemValue` e `itemName`.
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/b243955c-456f-47b6-8c40-4973239e2619" width='750px'>
</div>
&nbsp;

Ao final, a função `createNotes` e executada passando o objeto com os valores dos inputs(para criação das notas). Depois, selecionando o botão de deletar que cada card vai ter e executando sua função. Utilizei esta forma, pois para adicionar o evento aos botões eles precisam existir no html e a função sempre é executada quando o botão de adicionar um card é clicado. Ao final, executando a função de error passando `false` para retiralo da tela. 
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/2d0f4f42-a9a8-4410-82de-977ecab27d19" width='750px'>
</div>

### `createNote` - Criação das notas a partir de uma classe.
A função recebe um array de itens com a interface `itemsEstruture`. Depois é feito um filtro para pegar cada informação para a construção do card, como `title`, `text` e `reminder`. Depois o conteiner das notas é selecionado.
<div align='center'>
	<img src= "https://github.com/WillianOL/card_list-typescript/assets/112639055/6e58f711-d448-4af0-9c47-a6e629609178" width='750px'>
</div>
&nbsp;

Depois é verificado se o conteiner é uma instancia de HTMLElement




















