function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = (valorEmDolarNumerico * 4.97).toFixed(2);
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é: R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  