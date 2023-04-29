let novoElemento = document.createElement("a");
let texto = document.createTextNode("LINK");

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(novoElemento);
