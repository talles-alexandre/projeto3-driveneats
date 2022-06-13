let numpratos = 0;
let pratoescolhido = "";
let precopratoescolhido = "";
let beidaescolhida = "";
let precobeidaescolhida = "";
let sobremesaescolhida = "";
let precosobremesaescolhida = "";

function verificarPedido() {
  const botaopedido = document.querySelector(".botaopedido");

  if (numpratos === 3) {
    botaopedido.classList.add("escolhido");
    botaopedido.innerHTML = "Fechar pedido";
  }
}

function selecionarPrato(prato, nome, preco) {
  const pratoSelecionado = document.querySelector(".prato.selecionado");

  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
  } else {
    numpratos = numpratos + 1;
  }

  prato.classList.add("selecionado");
  pratoescolhido = nome;
  precopratoescolhido = preco;
  verificarPedido();
}

function selecionarBebida(bebida, nome, preco) {
  const bebidaSelecionado = document.querySelector(".bebida.selecionado");

  if (bebidaSelecionado !== null) {
    bebidaSelecionado.classList.remove("selecionado");
  } else {
    numpratos = numpratos + 1;
  }
  bebida.classList.add("selecionado");
  beidaescolhida = nome;
  precobeidaescolhida = preco;

  verificarPedido();
}

function selecionarSobremesa(sobremesa, nome, preco) {
  const sobremesaSelecionado = document.querySelector(".sobremesa.selecionado");
  if (sobremesaSelecionado !== null) {
    sobremesaSelecionado.classList.remove("selecionado");
  } else {
    numpratos = numpratos + 1;
  }
  sobremesa.classList.add("selecionado");
  sobremesaescolhida = nome;
  precosobremesaescolhida = preco;
  verificarPedido();
}

function finalizar() {
  const conta =
    precopratoescolhido + precobeidaescolhida + precosobremesaescolhida;

  if (numpratos < 3) {
  } else {
    const mensagem = encodeURIComponent(
      `Olá, gostaria de fazer o pedido: \n
      - Prato : ${pratoescolhido} \n
      - Bebida : ${beidaescolhida} \n
      - Sobremesa : ${sobremesaescolhida} \n
      Total : ${conta}
      `
    );

    const enviarpedido = "https://wa.me/5588997295844?text=" + mensagem;
    window.open(enviarpedido);
  }
}
