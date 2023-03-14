const frase = "O número 100 está aqui".match(/\d+/); //direto no metodo não preciso de um regex
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);
console.log(frase2);

/* Se o regex for global (com o g sinalizador), o exec()
método do regex será chamado repetidamente até exec()retornar
null. Caso contrário, exec()seria chamado apenas uma vez e 
seu resultado se tornaria o valor de retorno de @@match. */