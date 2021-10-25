const calculaValor = () => {
  let valoPorTempoUtilizado =  document.getElementById("valorPorUso").value;
  let tempoDeUso = document.getElementById("tempoUtilizado").value;
  let saidaResult = document.getElementById("saidaValor");
  const result = tempoDeUso / 15

  saidaResult.textContent = `R$ ${Math.ceil(result) * valoPorTempoUtilizado}`;
 

}
 
  const botao = document.getElementById("botao");
  botao.addEventListener("click", calculaValor);