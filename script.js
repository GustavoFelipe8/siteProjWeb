function valorCompra() {
    let somador = 0;
    let qtdItem1 = document.getElementById("item1").value;
    let qtdItem2 = document.getElementById("item2").value;
    let qtdItem3 = document.getElementById("item3").value;
    let qtdItem4 = document.getElementById("item4").value;
    let qtdItem5 = document.getElementById("item5").value;

    somador = somador + qtdItem1*0.99;
    somador = somador + qtdItem2*6.99;
    somador = somador + qtdItem3*15.99;
    somador = somador + qtdItem4*0.99;
    somador = somador + qtdItem5*1.49;

    somador = somador.toFixed(2);

    paragrafo = document.getElementById("precoCompra");
    paragrafo.innerText = "O valor da sua compra é: R$" + somador + ". Obrigado por comprar conosco!";
}