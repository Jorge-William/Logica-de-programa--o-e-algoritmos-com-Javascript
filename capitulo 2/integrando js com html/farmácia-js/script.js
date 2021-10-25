const calculaPromocao = () => {
  const produto = document.getElementById("produto").value;
  const preco = document.getElementById("precoProduto").value;
  const saidaProduto = document.getElementById("retornoProduto");
  const saidaValorPromocao = document.getElementById("retornoPromocao");
  
  saidaProduto.textContent = `Promoção de ${produto}`;
  const arredondado = Math.floor(preco);
  saidaValorPromocao.textContent = `Leve 2 por apenas ${arredondado * 2}`;
}

let botao = document.getElementById("botao");
botao.addEventListener("click", calculaPromocao)