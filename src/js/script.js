

function pesquisar() {
  
  let containerResultados = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa");
  
  let termoDePesquisa = campoPesquisa.value;
  
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  console.log(termoDePesquisa.toLowerCase())
  
  if (!termoDePesquisa) {
    containerResultados.innerHTML = `<h2 class="mensagem-aviso">Nada foi encontrado, digite um termo válido!</h2>`;
    return;
  }
  

  for (let jogo of jogos) {
    titulo = jogo.titulo.toLowerCase();
    descricao = jogo.descricao.toLowerCase();
    tags = jogo.tags.toLowerCase();
    
    console.log(titulo == termoDePesquisa.toLowerCase())
    
    if (titulo.includes(termoDePesquisa.toLowerCase()) || descricao.includes(termoDePesquisa.toLowerCase()) || tags.includes(termoDePesquisa.toLowerCase())) {
      resultados += `
      <div class="item-resultado">
        <div class="card-imagem">
          <img src="${jogo.linkCapa}" alt="${jogo.titulo}">
        </div>
        <div>
          <h2>${jogo.titulo}</h2>
          <p class="descricao-meta">${jogo.descricao}</p>
          <a href="${jogo.linkInfo}" target="_blank">Mais Informações</a>
        </div>
      </div>
    `;
    if (!resultados) {
    containerResultados.innerHTML = `<h2>Nenhum resultado foi encontrado. Digite o nome do jogo ou genero</h2>`;
  }
    containerResultados.innerHTML = resultados;
    }
    
  }
}