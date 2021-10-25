const calculaDesconto = () => {
  const produto = document.getElementById("produto").value; 
  const precoProduto = document.getElementById("preco").value; 
  const promocao = document.getElementById("saidaPromocao");
  const mensagem = document.getElementById("saidaMensagem");

  const valorPromocao = (precoProduto / 2) + precoProduto * 2
  promocao.textContent = `${produto} - Promoção: Leve 3 por R$ ${valorPromocao}`;
  mensagem.textContent = `O terceiro produto custa apenas: R$ ${ precoProduto / 2}`
}

const botao = document.getElementById("botao");
botao.addEventListener("click", calculaDesconto);