<h1 align="center"> CHALLENGE DO AMIGO SECRETO </h1>
<div align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="JAVASCRIPT" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
</div>

<div align="center">
<img align="center" width="450" height="277" alt="amigo-secreto" src="https://github.com/user-attachments/assets/56199d21-bad7-4137-ac70-90127aa41a46"/>
</div>


<p>Olá, seja bem vindo ao meu projeto <B>amigo secreto</B>, desafio proposto pela Alura para conclusão do curso <b>Praticando Logica de programação: Challenge amigo secreto</b></p>
<p>O desafio foi desenvolver uma aplicação permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".</p>

<h2>👇Acesse a página aqui</h2>
<a href="https://claenio.github.io/Challenge-amigo-secreto/">
  <img alt="GITHUB PAGES" src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white">
</a>

<h2> 👩‍💻 Explicando o código e funcionalidades</h2>
<p>O usuário adiciona nomes por meio de um campo de texto a uma lista visível ao pressionar Enter ou clicar em "Adicionar", se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.</p>
<p>Os nomes inseridos são exibidos em uma lista visível na página, e ao finalizar o botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela, caso haja apenas um nome para sortear aparecerá um alerta avisando que precisa de no mínimo dois nomes.</p>
<p>Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.</p>



<ul><h3>Funções</h3>
<li>
  <b>Função adicionarAmigo()</b>: é selecionado o input que será digitado o nome do amigo, se o campo estiver vazio, aparecerá um alerta solicitando um nome, caso contrário, o nome digitado será adicionado à array <b>arrayListaDeAmigos</b>,
  o campo será esvaziado para adicionar outro nome e será chamado a função <b>atualizarArrayLista()</b>, resposável por deixar o nome adicionado visível na página.
</li>
<li>
<b>Função atualizarArrayLista()</b>: Seleciona o elemento do HTML onde será exibido o nome dos amigos, onde é limpo antes de adicionar um nome, após isso vem um <b>loop for</b> resposável por armazenar e adicionar os nomes na lista na medida que forem adicionados
  e por fim, a lista é atualizada com o nome adicionado pelo <b>loop for</b>.
</li>
<li>
  <b>Função verificarTecla()</b>: Verifica se a tecla Enter foi pressionada, caso sim, a função <b>adicionarAmigo()</b> será acionada.
  E abaixo possui um event listener no campo amigo, para chamar a função <b>verificarTecla()</b> caso o input esteja selecionado.
</li>
<li>
  <b>Função sortearAmigo()</b>: E por fim a última função, responsável por selecionar o elemento HTML onde será exibido o nome sorteado.
  Caso haja menos que dois nomes na array <b>arrayListaDeAmigos</b>, aparecerá um alerta dizendo que não será possível fazer o sorteio solicitando no mínimo dois nomes.
  Caso tenha, será sorteado um número utilizando <b>Math.random</b> multiplicado pelo tamanho da array, que será armazenado na variável <b>numeroSorteado.</b>
  E após o sorteio, será atribuido à variável <b>nomeSorteado</b> o índice da array que representa o nome inserido e é mostrado na tela.
</li>
</ul>

<h2>📚Linguagens utilizadas</h2>
<p>O projeto tem como foco JAVASCRIPT para prática de lógica de programação, porém também é manipulado alguns elementos HTML e CSS.</p>

<h2>📸Screenshots</h2>
<img width="1920" height="952" alt="Screenshot" src="https://github.com/user-attachments/assets/6dd3fdb5-cd55-414e-804f-47c4d139f0af" />

