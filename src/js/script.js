let containerResultados = document.getElementById("resultados-pesquisa");

let resultados = "";

for (let jogo of jogos) {
  resultados += `
    <div class="item-resultado">
      <h2>${jogo.titulo}</h2>
      <p class="descricao-meta">${jogo.descricao}</p>
      <a href="${jogo.linkInfo}" target="_blank">Mais Informações</a>
    </div>
  `
  containerResultados.innerHTML = resultados;
}
console.log(dados);